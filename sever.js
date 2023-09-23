function init(){
    verify();
}
window.onload = init;

//logga in sak, ifall vi ska lägga på server. endast admin ska nå
async function verify(){
    let VavadaBracket = document.getElementById("vavadabracket");
    let HellcaseBracket = document.getElementById("hellcasebracket");
    let userverify = "";
    let response = await fetch(userverify, {
        headers:{
            "Authorization": localStorage.getItem("GUID")
        }
    });
 
    let role = await response.text();
    console.log(role);
    if(role==="standard"){
        uppload.addEventListener("click",event=> {
            location.href = "https://new2.heaton.nu/";
            VavadaBracket.remove();
        });
 
    }
    else if(role==="Admin"){
        uppload.addEventListener("click",event=> {
        location.href = "Vavada.html";
        });
    }
    return role;
 }
 