let main = document.getElementById("main");
let show = document.querySelector(".show");
let bgImage = document.querySelector(".bg-image");
let target = document.querySelectorAll(".scroll");

window.addEventListener("mousemove", giveCordinates);
function giveCordinates(e) {
  let x = (e.pageX * -1) / 15;
  let y = (e.pageY * -1) / 20;

  if (window.scrollY === 0) {
    bgImage.style.transform = "translate3d(" + x + "px," + y + "px, 0px)";
  }
  // else {
  //   bgImage.style.transform = "translate3d(" + posX + "px," + posX + "px, 0px)";
  // }
}

window.addEventListener("scroll", function(event) {
  var posX = window.pageYOffset * 1;
  var posY = window.pageYOffset * 2;

  let index = 0,
    length = target.length;

  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
    bgImage.style.transform = "translate3d(" + posX + "px," + posX + "px, 0px)";
  }
});
