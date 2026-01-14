export const initTheme = () => {
  if (typeof window === "undefined") return

  const stored = localStorage.getItem("theme")
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  const theme = stored || preferred

  document.documentElement.setAttribute("data-theme", theme)
}

export const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme")
  const next = current === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", next)
  localStorage.setItem("theme", next)

  return next
}

export const getTheme = () => {
  if (typeof window === "undefined") return "light"
  return document.documentElement.getAttribute("data-theme") || "light"
}
