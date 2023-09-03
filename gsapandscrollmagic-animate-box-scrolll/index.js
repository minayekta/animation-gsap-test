var tl = new TimelineMax({onUpdate:updatePercentage});
var controller = new ScrollMagic.Controller();

tl.from('.s-2-inner', 1, {y: -300, opacity: 0});
tl.from('.s-2-inner h2', 1, {x: -200, opacity: 0});
tl.from('.s-2-inner p', 1, {x: -200, opacity: 0});
tl.from('.s-2-inner a', 1, {x: -100, opacity: 0});
tl.from('.s-2 img', 1, {x: 50, opacity: 0});
tl.from('.s-2 .box', 1, {scale: 0, opacity: 0}, "-=2");


const scene = new ScrollMagic.Scene({
  triggerElement: ".s-2",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin(".s-2")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}