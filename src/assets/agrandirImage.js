console.log("test")
function onClick(element) {
    console.log("onclick proc12")
    document.getElementById("grande").src=element.src;
    
    document.getElementById("divgrande").style.display="block";
}
function fermetureCroix(){
    document.getElementById("divgrande").style.display="none";
    
}
