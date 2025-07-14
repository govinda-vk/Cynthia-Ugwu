   const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
   });

   window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
    document.body.style.backgroundColor ="darkgrey";
   });

   let timeout;
   function circlesmall(){
    let xscale=1;
    let yscale=1;

    let xprev=0;
    let yprev=0;

      window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        xscale=gsap.utils.clamp(0.7,1.3,dets.clientX-xprev);
        yscale=gsap.utils.clamp(0.7,1.3,dets.clientY-yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;
           
        circlemousefollower(xscale,yscale);
        timeout=setTimeout(function(){
            document.querySelector("#minicircle").style.transform = 
            `translate(${dets.pageX}px, ${dets.pageY}px) scale(1, 1)`; 
        },100)
      })
  }
   circlesmall();

   function circlemousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
  }
   circlemousefollower();
   function firstpageanim(){
    var t1=gsap.timeline();

    t1.from("#nav",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })

    t1.to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:0.3,
    })

    t1.from("#herofooter",{
        y:-10,
        opacity:0,    
   },"-=1.1")
}
firstpageanim();

document.querySelectorAll(".elem").forEach(function(elem) {
    let rotate=0;
    let diffrot=0;

    elem.addEventListener("mousemove", function(dets) {
        var rect = elem.getBoundingClientRect();
        var diffY = dets.clientY - rect.top;
        var diffX = dets.clientX - rect.left;

        diff=dets.clientX-rotate;
        rotate=dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            y:0,
            duration: 0.5,
            top: diffY + "px",
            left: diffX + "px",
            rotate:gsap.utils.clamp(-10,10,diff),
        });

        gsap.to(elem.querySelector(".hide"),{
            opacity:0.15,
            duration:0.2,           
    });   
})

elem.addEventListener("mouseleave", function() {
    gsap.to(elem.querySelector("img"), {
        opacity: 0, 
    });
  
    gsap.to(elem.querySelector("h1"), {
        opacity: 0.7,
        ease: Power1.easeInOut,
        duration: 0.3,
    });
});
});

gsap.to("#move",{
    transform:'translateX(-100%)',
    duration:28,
    repeat: -1,
    ease:"none",
})