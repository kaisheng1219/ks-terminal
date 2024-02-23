import { createSignal } from "solid-js";

export const [theme, setTheme] = createSignal("default");
export const themes = ["default", "dark", "light", "alien", "red"];
export const themesDict = {
  default: "theme-default",
  dark: "theme-dark",
  light: "theme-light",
  alien: "theme-alien",
  red: "theme-red",
};
