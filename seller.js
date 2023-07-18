const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

function dropDown() {
  var x = document.getElementById("dropdown");
  if (x.className === "dropdown") {
    x.className += "-active";
  } else {
    x.className = "dropdown";
  }
  var y = document.getElementById("sellerHero");
  if (y.className === "sellerHero") {
    y.className += " dropped";
  } else {
    y.className = "sellerHero";
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
