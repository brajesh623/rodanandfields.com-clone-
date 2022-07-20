// write code for signup 
let signArr= JSON.parse(localStorage.getItem("signRodan")) || []

  document.querySelector("form").addEventListener("submit", mySign);
  function mySign(event){
    event.preventDefault();

    let personNo= document.querySelector("#title").value;
    let personEmail= document.querySelector("#link").value;
    let personPass= document.querySelector("#pass").value;

    let signObj= {personNo, personEmail, personPass};
    console.log("signobj", signObj);

// for condition if person already signed up is again signing up
let flag= true;
for(let i=0;i<signArr.length;i++){
  if(signArr[i].personEmail==signObj.personEmail ){
  flag= false;
  break;
  }
}
if(flag==true){
  signArr.push(signObj);
  localStorage.setItem("signRodan", JSON.stringify(signArr));
  alert("Signed Up Successfully. Click on Sign in to login.");
}else{
  alert("You are already signed Up. Please Sign in");
 
}
window.location.href="login.html"  
  };