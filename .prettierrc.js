module.exports = {
  ...require("ory-prettier-styles"),
  importOrder: [
    "../../../styles/main.css",
    "../components/layouts/layout/layout",
    "^\\.\\./(?!.*\\.[a-z]+$)(.*)$",
    "^\\./(?!.*\\.[a-z]+$)(.*)$",
    "^\\.(?!.*module\\.css$)(.*)\\.css$",
    "^\\.(.*)\\.module\\.css$",
    "^\\.(.*)\\.(?!css$)[a-z]+$",
  ],
  plugins: [require("prettier-plugin-tailwindcss")],
}
