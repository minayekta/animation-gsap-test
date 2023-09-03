var tl = new TimelineMax({onUpdate:updatePercentage});
var controller = new ScrollMagic.Controller();

tl.from('.character1', 1, {y: -300, opacity: 0});
tl.from('.character2', 1, {y: -200, opacity: 0});
tl.from('.character3', 1, {y: -200, opacity: 0});
tl.from('.character4', 1, {y: -200, opacity: 0});
tl.from('.character5', 1, {y: -200, opacity: 0});



const scene = new ScrollMagic.Scene({
  triggerElement: ".logo-container",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin(".logo-container")
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}