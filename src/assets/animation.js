
function doubleImage(id){
    var liCorr=document.querySelector("main ul li:nth-of-type("+id+") .image");
    var toPanier = document.getElementById("c"+id);
    let imgCloned=toPanier.cloneNode(true);
    liCorr.appendChild(imgCloned);
    imgCloned.id="c"+id+"Cloned";
    imgCloned.className+=" Cloned";
    imgCloned.style.position = "absolute";
    console.log(imgCloned);
}
function animationJS(id){
    var imgCloned = document.getElementById("c"+id+"Cloned");
    // toPanier.style.position = "absolute";
    // toPanier.style.width="20px";
    setTimeout(function(){
    
    imgCloned.style.transform = "translate(20vw,-70vh)";
    imgCloned.style.transform += "scale(0)";
    imgCloned.style.transition = "all 1s";
    },1);
}

function correctionImg(){
    $(window).on('pageshow',function(){
        console.log("teszeazt")
      $('img').each(function(){
          if ($(this).width()/$(this).height() >= 1) {
              $(this).addClass('landscape');
          } else {
              $(this).addClass('portrait');
          }
      });
    });
}