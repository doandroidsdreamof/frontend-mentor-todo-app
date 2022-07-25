let tl = gsap.timeline({defaults: { ease: "Power3.easeOut", duration: 1 },});

const createdActive = activeTasks;
const createdCompleted = completedTasks;

const darkmodeButton = document.getElementById("darkmode");
const container = document.getElementById("container");

const urlDarkDesktop = "../images/bg-desktop-dark.jpg";
const urlLightDesktop = "../images/bg-desktop-light.jpg";

const urlDarkMobile = "../images/bg-mobile-dark.jpg";
const urlLightMobile = "../images/bg-mobile-light.jpg";

const urlImageMoon = "../images/icon-moon.svg";
const urlImageSun = "../images/icon-sun.svg";

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
const mobileGroupDesktop = document.querySelector('.function')
const mobileGroupToggled = document.querySelector('.function__group')
const monbileBreak = window.matchMedia("(min-width: 720px)")


window.onload =  () =>{
  darkmodeButton.classList.remove("lightModeOpen");
  darkmodeButton.classList.add("darkModeOpen");
  responsiveImage()

  

}

function ligthMode() {
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
  mobileGroupToggled.style.background = `${lightThemeVeryLightGray}`;
  mobileGroup.style.background = `${lightThemeVeryLightGray}`;
  cover.style.backgroundImage = `url(${urlLightDesktop})`;

  inputTop.style.color = "black";

}

function darkMode() {
  for (let i = 0; i < wrapperItems.children.length; i++) {
    wrapperItems.children[i].style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  }
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  }
  for (let i = 0; i < textCreated.length; i++) {
    textCreated[i].style.color = "white";
    textCreated[i].style.borderColor = `${darkThemeDarkGrayishBlue}`;
  }
  mobileGroupToggled.style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  mobileGroup.style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  cover.style.backgroundImage = `url(${urlDarkDesktop})`;
  inputTop.style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
  inputTop.style.color = `${darkThemeLightGrayishBlue}`;

}


darkmodeButton.addEventListener("click", (e) => {
  const target = e.target;
  if (darkModeClass.classList.contains("darkModeOpen")) {
    darkmodeButton.classList.add("lightModeOpen");
    darkmodeButton.classList.remove("darkModeOpen");
    darkmodeButton.src = `${urlImageMoon}`;
    mobileGroupDesktop.style.background = `${lightThemeVeryLightGray}`
    inputTop.style.background = `${lightThemeVeryLightGray}`;
    inputTop.style.color = "black";
    let tl = gsap.timeline({defaults: { ease: "Power3.easeOut", duration: 1, stagger: .2 },});
    tl.to(".background", {
      "clip-path": "circle(160% at 0% 0%)",
      backgroundColor: lightThemeLightGrayishBlue,
      opacity: 1,
      duration: 1,
    });
    ligthMode();
    monbileBreak.matches ?  cover.style.backgroundImage = `url(${urlLightDesktop})` : cover.style.backgroundImage = `url(${urlLightMobile})`  
   
  } else if (darkModeClass.classList.contains("lightModeOpen")) {
    darkmodeButton.classList.add("darkModeOpen");
    darkmodeButton.classList.remove("lightModeOpen");
    darkmodeButton.src = `${urlImageSun}`;
    mobileGroupDesktop.style.background = `${darkThemeVeryDarkDesaturatedBlue}`
    inputTop.style.background = `${darkThemeVeryDarkDesaturatedBlue}`;
    inputTop.style.color = "white";

    let tl = gsap.timeline({defaults: { ease: "Power3.easeOut", duration: 1, stagger: .2 },})
      tl.to(".background", {
        "clip-path": "circle(20% at 0% 120%)",
        clipPath: "inset(150% 0% 240%)",
        webkitClipPath: "inset(150% 0% 0%)",
        backgroundColor: darkThemeVeryDarkBlue,
        opacity: 1,
        duration: 1,
      })
      tl.to(".background", {
        "clip-path": "circle(160% at 100% 90%)",
        clipPath: "inset(150% 0% 240%)",
        webkitClipPath: "inset(150% 0% 0%)",
        backgroundColor: darkThemeVeryDarkBlue,
        opacity: 1,
        duration: 1,
      });
      darkMode();
      monbileBreak.matches ?  cover.style.backgroundImage = `url(${urlDarkDesktop})` : cover.style.backgroundImage = `url(${urlDarkMobile})`  
 
  
  }
});

inputTop.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && darkModeClass.classList.contains("lightModeOpen")) {
    ligthMode();
    textCreated.style.border = "3px solid red";
  }
  if (e.key === "Enter" && darkModeClass.classList.contains("darkModeOpen")) {
    darkMode();
  }
});

window.addEventListener('resize',responsiveImage)

function responsiveImage(){
  if( darkModeClass.classList.contains("darkModeOpen")){
    monbileBreak.matches ?  cover.style.backgroundImage = `url(${urlDarkDesktop})` : cover.style.backgroundImage = `url(${urlDarkMobile})`  
  }
  if( darkModeClass.classList.contains("lightModeOpen")){
    monbileBreak.matches ?  cover.style.backgroundImage = `url(${urlLightDesktop})` : cover.style.backgroundImage = `url(${urlLightMobile})`  
  }

}
