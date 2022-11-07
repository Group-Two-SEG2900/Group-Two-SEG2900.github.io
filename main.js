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
    el.style.display = "block"
    scroll
  }
}

// Change pricing table contents on click

var last_value = 'protein'

function change_table(value) {
    document.getElementById(last_value).style.display='none';
    document.getElementById(value).style.display='block';
    last_value = value;
}

// credit to SamGoody on StackOverflow for this function
function adjustCSSRules(selector, props, sheets){

  // get stylesheet(s)
  if (!sheets) sheets = [...document.styleSheets];
  else if (sheets.sup){    // sheets is a string
      let absoluteURL = new URL(sheets, document.baseURI).href;
      sheets = [...document.styleSheets].filter(i => i.href == absoluteURL);
      }
  else sheets = [sheets];  // sheets is a stylesheet

  // CSS (& HTML) reduce spaces in selector to one.
  selector = selector.replace(/\s+/g, ' ');
  const findRule = s => [...s.cssRules].reverse().find(i => i.selectorText == selector)
  let rule = sheets.map(findRule).filter(i=>i).pop()

  const propsArr = props.sup
      ? props.split(/\s*;\s*/).map(i => i.split(/\s*:\s*/)) // from string
      : Object.entries(props);                              // from Object

  if (rule) for (let [prop, val] of propsArr){
      // rule.style[prop] = val; is against the spec, and does not support !important.
      rule.style.setProperty(prop, ...val.split(/ *!(?=important)/));
      }
  else {
      sheet = sheets.pop();
      if (!props.sup) props = propsArr.reduce((str, [k, v]) => `${str}; ${k}: ${v}`, '');
      sheet.insertRule(`${selector} { ${props} }`, sheet.cssRules.length);
      }
  }