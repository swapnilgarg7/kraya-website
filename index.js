function dropDown() {
  var x = document.getElementById("dropdown");
  if (x.className === "dropdown") {
    x.className += "-active";
  } else {
    x.className = "dropdown";
  }
  var y = document.getElementById("hero");
  if (y.className === "hero") {
    y.className += " dropped";
  } else {
    y.className = "hero";
  }
  var z = document.getElementById("icon");
  if (z.className === "menu-icon") {
    z.innerHTML = "x";
    z.className = "cross-icon";
  } else {
    z.innerHTML = "&#8801;";
    z.className = "menu-icon";
  }
}

const buttons = document.querySelectorAll(".carousel-button");

buttons.forEach(button => {
  button.addEventListener("click", () =>{
    const nextSlideNumber = button.dataset.carousel;
    
    const slides = document.querySelectorAll(".carousel-slide");
    const activeSlide = document.querySelector("[data-active]");
    
    
    if(slides[nextSlideNumber - 1].dataset.active == undefined){
      slides[nextSlideNumber - 1].dataset.active = true;
      delete activeSlide.dataset.active;
    }

  });
});