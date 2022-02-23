$(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 27;
      mouseY = e.pageY - 23; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/4);
      yp += ((mouseY - yp)/4);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);
  
    const c = document.querySelector('.circle');
    const b = document.querySelector('button');

    b.addEventListener("mouseover", event =>{
        c.style.setProperty('border', 'solid 0px');
    })

    b.addEventListener("mouseout", event =>{
        c.style.setProperty('border', 'solid 2px grey');
    })

});