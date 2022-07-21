let arrfromLS= JSON.parse(localStorage.getItem("signRodan")) || [];


document.querySelector("form").addEventListener("submit", myLogin);


function myLogin(event){
event.preventDefault();

let loginEmail= document.querySelector("#link").value;
let loginPass= document.querySelector("#pass").value;

let loginObj= {loginEmail, loginPass};

let flag= false;
for(let i=0;i<arrfromLS.length;i++){
  if(arrfromLS[i].personEmail==loginObj.loginEmail && arrfromLS[i].personPass==loginObj.loginPass){
  flag=true;
  break;
  }
}
if(flag==true){
  alert("Loggedin Successfully");
  window.location.href= "index.html";

}else{
  alert("Wrong Credentials. Please check for correct Email or Password");
  window.location.href="signup.html"
}
}
