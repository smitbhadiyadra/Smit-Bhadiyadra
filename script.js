gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


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



gsap.from(".hero h1, .hero p, .hero button",{
    y: 100,
    duration: .8,
    opacity: 0,
    stagger: .15,
    scrollTrigger: {
        trigger: ".hero h1",
        scroller: "body",
        start: "top 90%",
        end: "bottom top",
    }
})

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


    let width = window.innerWidth;

    if(width>501){
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

    if(width>501){
        gsap.from(".logo, menu ",{
            x: 100,
            duration: .8,
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
    

    if (width < 501) {
        gsap.from(".page3 .left",{
            y: 100,
            opacity: 0,
            duration: .8,
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


    if(width>501){
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

    if(width<501){
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




