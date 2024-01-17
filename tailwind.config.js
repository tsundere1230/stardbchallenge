/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors: {
            space_dark: "#0F0A1F",
            galaxy_purple: {
                50: "#EDEFFE",
                100: "#DCDEFC",
                150: "#CACEF9",
                200: "#BABDF7",
                250: "#A9ADF3",
                300: "#9A9CF0",
                350: "#8B8BEC",
                400: "#7C79E8",
                450: "#6F67E3",
                500: "#6254DE",
                550: "#5448C1",
                600: "#473CA5",
                650: "#3A3189",
                700: "#2D266F",
                750: "#211B55",
                800: "#16113D",
                850: "#0B0826",
                900: "#030212",
                950: "#000002",
            },
        },
        extend: {},
    },
    plugins: [],
};
