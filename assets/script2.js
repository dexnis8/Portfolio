// Switch Theme (Dark ot light)

let darkMode = false;
let theme;
const themeChanger = document.querySelectorAll(".switchMode");
themeChanger.forEach((el) => {
  el.addEventListener("click", () => {
    let themeIcon = el.querySelector("i");
    console.log(themeIcon);
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      themeIcon.classList.replace("fa-sun", "fa-moon");
    } else if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
      themeIcon.classList.replace("fa-moon", "fa-sun");
    }
    theme = localStorage.getItem("theme");
    switchTheme();
  });
});
function switchTheme() {
  theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.style.setProperty("--bodyBg", "#000000");
    document.documentElement.style.setProperty("--textBlack", "#fff");
    document.documentElement.style.setProperty("--bgAsh", "#0d0d0d");
    document.documentElement.style.setProperty("--textAsh", "whitesmoke");
    document.documentElement.style.setProperty("--bgWhite", "#000000");
    document.documentElement.style.setProperty("--mobileNavBg", "#0d0d0d");
  } else if (theme === "light") {
    document.documentElement.style.setProperty("--bodyBg", "#FFFFFF");
    document.documentElement.style.setProperty("--textBlack", "#000000");
    document.documentElement.style.setProperty("--bgAsh", "#f5f5f5");
    document.documentElement.style.setProperty("--textAsh", "#696969");
    document.documentElement.style.setProperty("--bgWhite", "#FFFFFF");
    document.documentElement.style.setProperty(
      "--mobileNavBg",
      "rgb(240, 236, 236)"
    );
  }
}
switchTheme();
// setTimeout(() => Navigation.reload(), 1000);
