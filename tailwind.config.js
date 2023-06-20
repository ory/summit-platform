const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Jetbrains Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        keto: colors.teal,
        kratos: colors.orange,
        hydra: colors.rose,
        oauthkeeper: colors.pink,
        info: colors.sky,
        succes: colors.green,
        warning: colors.yellow,
        error: colors.red,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
  ],
}
