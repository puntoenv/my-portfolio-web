import type { HTMLTag } from "astro/types";

const getThemePreference = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
const isDark = getThemePreference() === "dark";
document.documentElement.classList[isDark ? "add" : "remove"]("dark");

if (typeof localStorage !== "undefined") {
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
}

window.addEventListener("scroll", function () {
  const profilePicture = document.querySelector(
    "#profile-picture",
  ) as HTMLElement;
  const { style } = profilePicture;
  const { scrollY } = window;

  if (scrollY > 70) {
    style.width = "50px";
    style.height = "50px";
    style.top = "0.275%";
    style.left = "calc(50% - 25px)";
    style.transition = "all 0.5s ease";
    style.transform = "translate(0%, 50%)";
    style.position = "fixed";
  } else {
    style.width = "150px";
    style.height = "150px";
    style.top = "10%";
    style.left = "calc(50% - 75px)";
    style.transition = "all 0.5s ease";
    style.transform = `translate(0, 0)`;
    style.position = "absolute";
  }
});
