/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        // screens: {
        //     tablet: "320px",
        // },
        colors: {
            primary: "#054D97",
            white: "#FFFFFF",
            danger: "#DA1414",
        },
        extend: {},
    },
    plugins: [],
};