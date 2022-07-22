import { mainnavbar, footer, lastbar} from "./navbar.js";
document.getElementById("mainnav").innerHTML= mainnavbar();
document.getElementById("footer").innerHTML= footer();
document.getElementById("lastbar").innerHTML= lastbar();


//********************************************************

let RodanArr= JSON.parse(localStorage.getItem("Userbag")) || [];

displayItems(RodanArr);

function displayItems(RodanArr){

  document.querySelector("#left-two").innerHTML= "";

  let bagArr=[];

  RodanArr.forEach((elem, index)=>{

    let div1= document.createElement("div");
    div1.setAttribute("id", "one");

    let image= document.createElement("img");
    image.setAttribute("id", "photo");
    image.src= elem.image;

    

    //****************************************************

    let div2= document.createElement("div");
    div2.setAttribute("id", "two");

    let title= document.createElement("p");
    title.setAttribute("id", "name")
    title.innerText= elem.title;

    let otherItem= document.createElement("a");
    otherItem.setAttribute("id", "other");
    otherItem.innerText= "Add another regimen"
    otherItem.href= "index.html";

    div2.append(title, otherItem);

    //*****************************************************
    
    let div3= document.createElement("div");
    div3.setAttribute("id", "three");

    let price= document.createElement("p");
    price.setAttribute("id", "dolar");
    price.innerText= "$"+elem.retail_price;
    
    //For subTotal of bag
    // let subtotal= document.querySelector("#subTotal");
    // subtotal.innerText= "$"+elem.retail_price;
    bagArr.push(elem.retail_price);


    let pic= document.createElement("img");
    pic.setAttribute("id", "pic");
    pic.src= "https://static.vecteezy.com/system/resources/previews/000/440/992/original/delete-vector-icon.jpg";
    
    pic.addEventListener("click", function(){

      rodanFunc(index);

    });

    div3.append(pic, price);

    //******************************************************

    div1.append(image, div2, div3);

    document.querySelector("#left-two").append(div1);

  });

  localStorage.setItem("Sub_Total", JSON.stringify(bagArr));
};

//leleting of products
function rodanFunc(index){
  RodanArr.splice(index, 1);
  localStorage.setItem("Userbag", JSON.stringify(RodanArr));
  window.location.reload();
};

// For Totalprice of all the items
let TotalPrice= JSON.parse(localStorage.getItem("Sub_Total"));

let sum=0;
for( let i=0; i<TotalPrice.length; i++){

  sum=sum + TotalPrice[i];
}
document.querySelector("#subTotal").innerText= "$" + sum;
document.querySelector("#estimatedTotal").innerText= "$" + sum;

document.querySelector("#hit").addEventListener("click", continueShopping);
function continueShopping(){
  window.location.href= "index.html";
};

document.querySelector("#hitIt").addEventListener("click", checkout);
function checkout(){
  window.location.href= "./paycard.html";
};


