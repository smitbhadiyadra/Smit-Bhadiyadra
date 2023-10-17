// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("body", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, 
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();


// gsap.to(".name h1",{
//     transform: "translateX(-50%)",
//     fontWeight: "100",
//     fontSize: "30vw",
//     scrollTrigger:{
//         trigger: ".name",
//         scroller: "body",
//         start: "top 0",
//         end: "top -150%",
//         scrub: 5,
//         // markers: true,
//         pin: true
//     }
// })



$(document).ready(function(){
    $('#icon').click(function(){
      $('menu').toggleClass('show');
    });
  });

  $(document).ready(function(){
    $('#close').click(function(){
      $('menu').toggleClass('show');
    });
  });






function layerPageAnimation(){
   

    gsap.to(".layer .box #first, .layer .box #second",{
        y: "-270%",
        duration: 1.2,
        delay: .8,
        ease: Expo.easeInOut
    },"a")
    
    gsap.to(".layer .box #second, .layer .box #third",{
        y: "-540%",
        duration: 1.2,
        delay: 2.8,
        ease: Expo.easeInOut

    },"a")
    
    gsap.to(".layer .box #third, .layer .box #first",{
        y: "-810%",
        duration: 1.2,
        delay: 4.8,
        ease: Expo.easeInOut
    },"a")
    
    gsap.to(".layer",{
        y: "100%",
        opacity: 0,
        zIndex: -1,
        scale: .9,
        duration: .5,
        delay: 6.5,
        ease: Expo.easeInOut,
        animating: true
    })

}
layerPageAnimation()






function homePageAnimation(){
    gsap.from(".hero h1, .hero p, .hero button",{
        y: 100,
        duration: .8,
        delay: 7,
        opacity: 0,
        stagger: .15,
        scrollTrigger: {
            trigger: ".hero h1",
            scroller: "body",
            start: "top 90%",
            end: "bottom top",
        }
    },"a")
}
homePageAnimation()




let width = window.innerWidth;

if(width>501){

    function layerPageAnimation(){
        gsap.to(".layer .box #first, .layer .box #second",{
            y: "-270%",
            duration: 1.2,
            delay: .8,
            ease: Expo.easeInOut
        },"a")
        
        gsap.to(".layer .box #second, .layer .box #third",{
            y: "-540%",
            duration: 1.2,
            delay: 2.8,
            
        },"a")
        
        gsap.to(".layer .box #third, .layer .box #first",{
            y: "-810%",
            duration: 1.2,
            delay: 4.8,
            ease: Expo.easeInOut
        },"a")
        
        gsap.to(".layer",{
            opacity: 0,
            zIndex: -1,
            duration: .5,
            delay: 6.5,
            // ease: Expo.easeInOut
        })
    }
    layerPageAnimation()
        
    function sheryJsAnimation(){
            Shery.mouseFollower({
                //Parameters are optional.
                skew: true,
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
              });
              
              
              Shery.makeMagnet(".layer .box, .logo, menu a, button, .page6 img, .page2 a, .page6 h1, .page9 a" /* Element to target.*/, {
                //Parameters are optional.
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
              });

              Shery.imageMasker(".page5 img" /* Element to target.*/, {
                //Parameters are optional.
                mouseFollower: true,
                text: "Projects",
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
              });
              
              
              Shery.imageMasker(".page8 h1" /* Element to target.*/, {
                //Parameters are optional.
                mouseFollower: true,
                text: "Get In Touch",
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
              });
    }
    sheryJsAnimation()
    
    function navAnimation(){
    gsap.from(".logo, menu ",{
        x: 100,
        duration: .8,
        delay: 7,
        opacity: 0,
        stagger: .3,
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            start: "top 2%",
            end: "bottom top",
        }
    })
    }
    navAnimation()

    function page2Animation(){
        gsap.from(".page2 .menu",{
            y: 110,
            opacity: 0,
            duration: 1,
            stagger: .2,
            scrollTrigger: {
                trigger: ".page2 .menu",
                scroller: "body",
                start: "top 110%",
                end: "bottom top",
            }
        })
    }
    page2Animation()

    function page3Animation(){
            gsap.from(".page3 .left, .page3 .right",{
                y: 100,
                opacity: 0,
                duration: .8,
                stagger: .5,
                scrollTrigger: {
                    trigger: ".page3 .left",
                    scroller: "body",
                    start: "top 88%",
                    end: "bottom bottom",
                }
            })
    }
    page3Animation()

    function page4Animation(){
            gsap.from(".page4 .up h1",{
                y: 200,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".page4 .up h1",
                    scroller: "body",
                    start: "top 93%",
                    end: "bottom bottom",
                }
            })
            
            gsap.from(".page4 .down .box",{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".page4 .up h1",
                    scroller: "body",
                    start: "top 85%",
                    end: "bottom bottom",
                }
            })
    }
    page4Animation()


}


if (width < 501) {

    function page2AnimationResponsive(){
        gsap.from(".page2 .menu",{
            y: 110,
            opacity: 0,
            duration: 1,
            delay: 7,
            stagger: .2,
            scrollTrigger: {
                trigger: ".page2 .menu",
                scroller: "body",
                start: "top 110%",
                end: "bottom top",
            }
        })
    }
    page2AnimationResponsive()

    function page3AnimationResponsive(){
            gsap.from(".page3 .left",{
                y: 100,
                opacity: 0,
                duration: .8,
                delay: 7,
                stagger: .5,
                scrollTrigger: {
                    trigger: ".page3 .left",
                    scroller: "body",
                    start: "top 88%",
                    end: "bottom bottom",
                    // markers: true
                }
            })
    
            gsap.from(".page3 .right",{
                y: 100,
                opacity: 0,
                duration: .8,
                stagger: .5,
                scrollTrigger: {
                    trigger: ".page3 .right",
                    scroller: "body",
                    start: "top 88%",
                    end: "bottom bottom",
                    // markers: true
                }
            })
    }
    page3AnimationResponsive()

    function page4AnimationResponsive(){
            gsap.from(".page4 .up h1",{
                y: 200,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".page4 .up h1",
                    scroller: "body",
                    start: "top 93%",
                    end: "bottom bottom",
                }
            })
            
            gsap.from(".page4 .down #first-box",{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".page4 .down #first-box",
                    scroller: "body",
                    start: "top 85%",
                    end: "bottom bottom",
                    // markers: true
                }
            })
    
            gsap.from(".page4 .down #second-box",{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".page4 .down #second-box",
                    scroller: "body",
                    start: "top 85%",
                    end: "bottom bottom",
                    // markers: true
    
                }
            })
    
            gsap.from(".page4 .down #third-box",{
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".page4 .down #third-box",
                    scroller: "body",
                    start: "top 85%",
                    end: "bottom bottom",
                }
            })
    }
    page4AnimationResponsive()


}
 

function exploreButton(){
    gsap.from(".Explore button",{
        y: 100,
        opacity: 0,
        duration: .6,
        stagger: .2,
        scrollTrigger: {
            trigger: ".Explore button",
            scroller: "body",
            start: "top 105%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
exploreButton()


function page5Animation(){
    gsap.from(".page5 .up",{
        x: -150,
        opacity: 0,
        duration: 1.5,
        stagger: .5,
        scrollTrigger: {
            trigger: ".page5 .up",
            scroller: "body",
            start: "top 75%",
            end: "bottom bottom",
            // markers: true
        }
    })
    
    gsap.from(".page5 .down",{
        x: 150,
        opacity: 0,
        duration: 1.5,
        stagger: .5,
        scrollTrigger: {
            trigger: ".page5 .down",
            scroller: "body",
            start: "top 75%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page5Animation()


function page6Animation(){
    gsap.from(".page6 .top h1,.page6 .top p",{
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: ".page6 .top p",
            scroller: "body",
            start: "top 110%",
            end: "bottom bottom",
            // markers: true
        }
    })
    
    gsap.from(".page6 .bottom .left h1,.page6 .bottom .left p",{
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".page6 .top p",
            scroller: "body",
            start: "top 80%",
            end: "bottom bottom",
            // markers: true
        }
    })
    
    gsap.from(".page6 .bottom img",{
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: ".page6 .top p",
            scroller: "body",
            start: "top 70%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page6Animation()


function page7Animation(){
    gsap.from(".page7>h1, .page7>p, .page7 .box",{
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".page7>h1, .page7>p, .page7 .box",
            scroller: "body",
            start: "top 85%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page7Animation()


function page8Animation(){
    gsap.from(".page8>a>h1",{
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".page8>a>h1",
            scroller: "body",
            start: "top 95%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page8Animation()


function page9Animation(){
    gsap.from(".page9 .box",{
        x: 150,
        opacity: 0,
        duration: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".page9 .box",
            scroller: "body",
            start: "top 90%",
            end: "bottom bottom",
            // markers: true
        }
    })
}
page9Animation()




const boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    })
})



document.querySelectorAll('a[href^="#page3, #page4, #page5"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





