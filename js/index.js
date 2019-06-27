let main = document.getElementById("main");
let show = document.querySelector(".show");
let bgImage = document.querySelector(".bg-image");
window.addEventListener("mousemove", giveCordinates);
function giveCordinates(e) {
  console.log(e);
  let x = (e.pageX * -1) / 15;
  let y = (e.pageY * -1) / 20;

  bgImage.style.transform = "translate3d(" + x + "px," + y + "px, 0px)";
  // bgImage.style.transition = "transform 0.1s ease ";
}
