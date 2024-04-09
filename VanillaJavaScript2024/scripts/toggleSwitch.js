// Access the HTML elements using DOM Selector Methods.
let toggleSwitchId = document.getElementById("toggleSwitchId");
let switchBtn = document.getElementById("switchBtnId");
let heading = document.getElementById("headingId");
let mode = document.getElementById("modeId");
let toggleState = true;

toggleSwitchId.addEventListener("click", () => {
  if (toggleState) {
    switchBtn.style.transform = "translateX(100px)";
    document.body.style.backgroundColor = "black";
    toggleSwitchId.style.backgroundColor = "cyan";
    heading.style.color = "cyan";
    heading.style.textShadow = "0px 0px 8px cyan";
    mode.innerText = "Dark Mode Activated";
    mode.style.color = "cyan";
    mode.style.textShadow = "0px 0px 8px cyan";
    toggleState = false;
  } else {
    switchBtn.style.transform = "translateX(0px)";
    document.body.style.backgroundColor = "white";
    toggleSwitchId.style.backgroundColor = "white";
    heading.style.color = "black";
    heading.style.textShadow = "0px 0px 8px black";
    mode.innerText = "Light Mode Activated";
    mode.style.color = "black";
    mode.style.textShadow = "0px 0px 8px black";
    toggleState = true;
  }
});
