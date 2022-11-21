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

var last = 'protein'

function change_table(value) {
    document.getElementById(last).style.display = 'none';
    document.getElementById(value).style.display = 'block';
    last = value;
}

// Change displayed meals to match the meal restriction on click

var last_value = "vgn";

function changeMeals(value) {

    for (var i = 1; i <= 6; i++) {
        document.getElementById(last_value + "Title" + i).style.display = "none";
        document.getElementById(last_value + "Image" + i).style.display = "none";
        document.getElementById(last_value + "Desc" + i).style.display = "none";
    }

    for (var i = 1; i <= 6; i++) {
        document.getElementById(value + "Title" + i).style.display = "block";
        document.getElementById(value + "Image" + i).style.display = "block";
        document.getElementById(value + "Desc" + i).style.display = "block";
    }

    last_value = value;
}
