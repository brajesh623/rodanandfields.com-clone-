document.querySelector("form").addEventListener("submit",myfunction);
function myfunction(){
    event.preventDefault();
    let result=document.querySelector("#otp").value;
    if(result=="1234"){

        window.location.href= "./success.html"

    }else{

      window.location.href= "./failed.html"

    }
}