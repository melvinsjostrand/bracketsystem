
function init(){

    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        login();
        //location.href = backurl;
        event.preventDefault();
    })
}
window.onload = init;

async function login(){
    const error = document.getElementById("error");
    let account = form.elements.account.value;
    let password = form.elements.password.value;

    let path = "";
    const response = await fetch(path ,{
        method:"GET",
        mode:"cors",
        headers:{
          Authorization: "Basic: " + btoa(account+":"+password)
        }
    })

    console.log(response.status);
    if(response.status === 200){
        let key = await response.text();
        //inloggad
        localStorage.setItem("GUID" , key)
        location.href = "konto.html";
    } else{
        console.log("något blev fel. Typ lösenord/mail");
    }
}
