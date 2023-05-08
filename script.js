document.getElementById("parent").innerHTML=("Something else");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center");
document.getElementsByClassName("exercise")[1].innerHTML=("I am index 0");
document.getElementsByTagName("h1")[1].innerHTML=("i am change");
document.querySelector("h1").style.cssText=("background-color:aqua; color:blue;");
document.querySelector("#ram").style.cssText=("background-color:yellow; color:red;");
document.querySelector(".sita").style.cssText=("background-color:green; color:indigo;");
const change=document.querySelectorAll("h2");
for(i=0;i<=change.length; i++){
    change[i].innerHTML=("i am action star");
}
function myFunction(){
    const element=document.body;
    element.classList.toggle("dark-mode");
}