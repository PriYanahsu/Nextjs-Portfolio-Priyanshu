// Shared by the server layout (no-flash script) and the client toggle.
export type Theme = "dark" | "light";
export const THEME_KEY = "theme";
export const THEME_COLORS: Record<Theme, string> = { dark: "#0a0a0b", light: "#fbf9f6" };

/**
 * Runs in <head> before first paint so the saved (or system) theme applies
 * without a flash. Kept as a string because it executes before React loads.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==="light"?"${THEME_COLORS.light}":"${THEME_COLORS.dark}";}catch(e){document.documentElement.dataset.theme="dark";}})();`;
