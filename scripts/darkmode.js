let tl = gsap.timeline({ defaults: { ease: "Power3.easeOut", duration: 1 } });

const createdActive = activeTasks;
const createdCompleted = completedTasks;

const darkmodeButton = document.getElementById("darkmode");
const container = document.getElementById("container");

const urlDarkDesktop = "..images/bg-desktop-dark.jpg";
const urlLightDesktop = "..images/bg-desktop-light.jpg";

const urlDarkMobile = "..images/bg-mobile-dark.jpg";
const urlLightMobile = "..images/bg-mobile-light.jpg";

const urlImageMoon = "..images/icon-moon.svg";
const urlImageSun = "..images/icon-sun.svg";

const inputTop = document.querySelector(".todo__input");
const wrapperItems = document.querySelector(".wrapper");
const cover = document.querySelector(".cover");

const textCreated = document.getElementsByClassName("todolist");
const darkModeClass = document.querySelector(".cover__darkmode");
const footerDarkMode = document.querySelector(".footer");


const lightThemeBrirhtBlue = "hsl(220, 98%, 61%)";
const lightThemeVeryLightGray = "hsl(0, 0%, 98%)";
const lightThemeVeryLightGrayishBlue = "hsl(236, 33%, 92%)";
const lightThemeLightGrayishBlue = "hsl(233, 11%, 84%)";
const lightThemeDarkGrayishBlue = "hsl(236, 9%, 61%)";
const lightThemeVeryDarkGrayishBlue = "hsl(235, 19%, 35%)";

const darkThemeVeryDarkBlue = "hsl(235, 21%, 11%)";
const darkThemeVeryDarkDesaturatedBlue = "hsl(235, 24%, 19%)";
const darkThemeLightGrayishBlue = "hsl(234, 39%, 85%)";
const darkThemeHoverLightGrayishBlue = "hsl(236, 33%, 92%)";
const darkThemeDarkGrayishBlue = "hsl(233, 14%, 35%)";
const darkThemeVeryDarkGrayishBlue = "hsl(237, 14%, 26%)";

const mobileGroup = document.querySelector('.function__group__mobile')
const mobileGroupToggled = document.querySelector('.function__group')
const monbileBreak = window.matchMedia("(min-width: 720px)")



window.addEventListener('resize',responsiveImage)
window.onload = () =>{
  responsiveImage()
}
function responsiveImage(){
  if( darkModeClass.classList.contains("darkModeOpen")){
    monbileBreak.matches ?  cover.style.backgroundImage = `url(${urlDarkDesktop})` : cover.style.backgroundImage = `url(${urlDarkMobile})`  
  }
  if( darkModeClass.classList.contains("lightModeOpen")){
    monbileBreak.matches ?  cover.style.backgroundImage = `url(${urlLightDesktop})` : cover.style.backgroundImage = `url(${urlLightMobile})`  
  }

}

darkmodeButton.addEventListener("click", (e) => {
  const target = e.target;
  if (target.className.match(".darkModeOpen")) {
    darkmodeButton.classList.add("lightModeOpen");
    darkmodeButton.classList.remove("darkModeOpen");
    
    let tl = gsap.timeline({
      defaults: { ease: "Power3.easeOut", duration: 1 },
    });
    tl.to(".background", {
      "clip-path": "circle(160% at 0% 0%)",
      backgroundColor: lightThemeLightGrayishBlue,
      opacity: 1,
      duration: 1,
    });
    
    ligthMode();
  } else if (target.className.match(".lightModeOpen")) {
    darkmodeButton.classList.remove("lightModeOpen");
    darkmodeButton.classList.add("darkModeOpen");
    let tl = gsap
      .timeline({
        defaults: { ease: "Power3.easeOut", duration: 1, stagger: 2 },
      })
      .to(".background", {
        "clip-path": "circle(20% at 0% 120%)",
        clipPath: "inset(150% 0% 240%)",
        webkitClipPath: "inset(150% 0% 0%)",
        backgroundColor: darkThemeVeryDarkBlue,
        opacity: 1,
        duration: 1,
      })
      .to(".background", {
        "clip-path": "circle(160% at 100% 90%)",
        clipPath: "inset(150% 0% 240%)",
        webkitClipPath: "inset(150% 0% 0%)",
        backgroundColor: darkThemeVeryDarkBlue,
        opacity: 1,
        duration: 1,
      });
    darkMode();
  }
});

function ligthMode() {
  mobileGroupToggled.style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  mobileGroup.style.background = `${lightThemeVeryLightGray}`;
  cover.style.backgroundImage = `url(${urlLightDesktop})`;
  darkmodeButton.src = `${urlImageMoon}`;
  inputTop.style.background = `${lightThemeVeryLightGray}`;
  inputTop.style.color = "black";
  monbileBreak.matches ?  cover.style.backgroundImage = `url(${urlLightDesktop})` : cover.style.backgroundImage = `url(${urlLightMobile})`  
  for (let i = 0; i < wrapperItems.children.length; i++) {
    wrapperItems.children[i].style.background = `${lightThemeVeryLightGray}`;
  }
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].style.background = `${lightThemeVeryLightGray}`;
  }
  for (let i = 0; i < textCreated.length; i++) {
    textCreated[i].style.color = `${lightThemeVeryDarkGrayishBlue}`;
    textCreated[i].style.borderColor = `${lightThemeVeryLightGrayishBlue}`;
  }
}

function darkMode() {
  mobileGroupToggled.style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  mobileGroup.style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  darkmodeButton.src = `${urlImageSun}`;
  inputTop.style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  inputTop.style.color = `${darkThemeLightGrayishBlue}`;
  monbileBreak.matches ?  cover.style.backgroundImage = `url(${urlDarkDesktop})` : cover.style.backgroundImage = `url(${urlDarkMobile})`  

  for (let i = 0; i < wrapperItems.children.length; i++) {
    wrapperItems.children[
      i
    ].style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  }
  for (let i = 0; i < container.children.length; i++) {
    container.children[
      i
    ].style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  }
  for (let i = 0; i < textCreated.length; i++) {
    textCreated[i].style.color = "white";
    textCreated[i].style.borderColor = `${darkThemeDarkGrayishBlue}`;
  }
}

inputTop.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && darkModeClass.classList.contains("lightModeOpen")) {
    ligthMode();
    textCreated.style.border = "3px solid red";
  }
  if (e.key === "Enter" && darkModeClass.classList.contains("darkModeOpen")) {
    darkMode();
  }
});

