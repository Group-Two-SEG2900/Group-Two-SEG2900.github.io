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

// Change pricing table contents on click

var last_value = "protein";

function change_table(value) {
  document.getElementById(last_value).style.display = "none";
  document.getElementById(value).style.display = "block";
  last_value = value;
}
