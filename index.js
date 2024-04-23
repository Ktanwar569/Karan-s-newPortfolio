function all() {
    var crsr = document.querySelector("#cursor")
    // var blur1 = document.querySelector("#cursor-blur")
    var body = document.body;
    var sidebar = document.querySelector("#sidebar");
    var navtoggle = document.querySelector("#navtoggle")
    var navtoggle2 = document.querySelector("#navtoggle2")

    document.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + "px"
        crsr.style.top = dets.y + "px"
        // blur1.style.left = dets.x + "px"
        // blur1.style.top = dets.y + "px"
    })

    navtoggle.addEventListener("click", function () {
        sidebar.style.width = "100%";
    })

    navtoggle2.addEventListener("click", function () {
        sidebar.style.width = "0";
    })

    gsap.to("#page2BoxFooter i", {
        scale: 1.1,
        duration: 1,
        yoyo: true,
        repeat: -1
    })

    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#page3 .box2 img", {
        opacity: 1,
        y: 30,
        duration: 0.1,
        stagger: .1,
        scrollTrigger: {
            trigger: "#page3 h1",
            scroller: "body", // Scroller ko body par set karein
            start: "top 30%",
            // markers: true
        }
    });

 
}
function clutter(){
     // JavaScript code to modify h3 content
var allh3 = document.querySelectorAll("#about h3");
allh3.forEach(function(elem) {
    var clutter = "";
    var h3text = elem.textContent;
    var split = h3text.split("");
    split.forEach(function(e) {
        clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
});

// GSAP animation to apply color to spans with stagger effect
gsap.to("#about h3 span", {
    color: "gray",
    stagger: 0.1, // Adjust the stagger value to control the timing between each span
    scrollTrigger: {
        trigger: "#about", // Use the #about section as the trigger
        start: "top 50%", // Start the animation when the top of #about is at 50% of the viewport
        end: "top 10%", // End the animation when the top of #about is at 10% of the viewport
        scrub: 3 // Allow the animation to be scrubbed (smoothly updated) based on scroll position
        
    }
});

    
}
all();
clutter();