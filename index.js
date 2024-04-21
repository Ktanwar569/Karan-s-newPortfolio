function all(){
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

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector('main'), // Scrolling container ko specify karein
//     smooth: true
// });
}
all();
