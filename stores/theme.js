// stores/theme.js
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light", // default theme
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", this.theme === "dark");
    },
  },
});
