//SCROLL TO TOP ON REFRESH
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//Year to Date calculator
document.getElementById("yearToDate").innerHTML =
  "© YouTrient " + new Date().getFullYear();

//Reviews fade-in
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 1,
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Enable dropdown section on click
function toggleDisplay(id) {
  var el = document.getElementById(id);
  if (el.style.display === "none") {
    el.style.display = "block";
    scroll;
  }
}

// Hide elements (mainly used for the default message if the user does not enter enough info in the meal plan maker)
function hideDisplay(id) {
  var el = document.getElementById(id);
  if (el.style.display === "block") {
    el.style.display = "none";
    scroll;
  }
}

// Change pricing table contents on click

var last_value = "protein";

function change_table(value) {
  document.getElementById(last_value).style.display = "none";
  document.getElementById(value).style.display = "block";
  last_value = value;
}

// Change displayed meals to match the meal restriction on click

var last_value = "vgn";

function changeMeals(value) {
  document.getElementById(last_value + "Title1").style.display = "none";
  document.getElementById(last_value + "Image1").style.display = "none";
  document.getElementById(last_value + "Desc1").style.display = "none";
  document.getElementById(last_value + "Title2").style.display = "none";
  document.getElementById(last_value + "Image2").style.display = "none";
  document.getElementById(last_value + "Desc2").style.display = "none";
  document.getElementById(last_value + "Title3").style.display = "none";
  document.getElementById(last_value + "Image3").style.display = "none";
  document.getElementById(last_value + "Desc3").style.display = "none";
  document.getElementById(last_value + "Title4").style.display = "none";
  document.getElementById(last_value + "Image4").style.display = "none";
  document.getElementById(last_value + "Desc4").style.display = "none";
  document.getElementById(last_value + "Title5").style.display = "none";
  document.getElementById(last_value + "Image5").style.display = "none";
  document.getElementById(last_value + "Desc5").style.display = "none";
  document.getElementById(last_value + "Title6").style.display = "none";
  document.getElementById(last_value + "Image6").style.display = "none";
  document.getElementById(last_value + "Desc6").style.display = "none";

  document.getElementById(value + "Title1").style.display = "block";
  document.getElementById(value + "Image1").style.display = "block";
  document.getElementById(value + "Desc1").style.display = "block";
  document.getElementById(value + "Title2").style.display = "block";
  document.getElementById(value + "Image2").style.display = "block";
  document.getElementById(value + "Desc2").style.display = "block";
  document.getElementById(value + "Title3").style.display = "block";
  document.getElementById(value + "Image3").style.display = "block";
  document.getElementById(value + "Desc3").style.display = "block";
  document.getElementById(value + "Title4").style.display = "block";
  document.getElementById(value + "Image4").style.display = "block";
  document.getElementById(value + "Desc4").style.display = "block";
  document.getElementById(value + "Title5").style.display = "block";
  document.getElementById(value + "Image5").style.display = "block";
  document.getElementById(value + "Desc5").style.display = "block";
  document.getElementById(value + "Title6").style.display = "block";
  document.getElementById(value + "Image6").style.display = "block";
  document.getElementById(value + "Desc6").style.display = "block";

  last_value = value;
}
