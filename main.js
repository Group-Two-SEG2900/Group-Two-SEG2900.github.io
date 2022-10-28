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


/*Enable Dropdown section
document.getElementByClassName("collapsible_button").addEventListener("click", function () {
  getElementById("make_plan_dropdown").style.display === "block";
});
*/


function toggleDisplay(id) { 
  var el = document.getElementById(id);
  if (el.style.display === "none") {
    el.style.display = "block"
    scroll
  }
}