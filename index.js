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

const button = document.querySelector("carousel-button-next");

