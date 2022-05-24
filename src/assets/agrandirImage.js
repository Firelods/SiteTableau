console.log("test")
function onClick(element) {
    console.log("onclick proc1")
    document.getElementById("grande").src=element.src;
    
    document.getElementById("divgrande").style.display="block";
}

