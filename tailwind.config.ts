import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },

            fontFamily: {
                peyda: "PeydaWebFaNum",
            },

            colors: {
                ada: {
                    primary: {
                        10: "#734D00",
                        20: "#8B6000",
                        30: "#AC7C00",
                        40: "#CE9900",
                        50: "#F0B800",
                        60: "#F6CF3D",
                        70: "#FADE64",
                        80: "#FDED98",
                        90: "#FFF6C1",
                        95: "#FFFADA",
                        99: "#FFFCEC",
                    },

                    secondary: {
                        10: "#080A18",
                        20: "#0D101D",
                        30: "#151824",
                        40: "#1F222B",
                        50: "#2B2D33",
                        60: "#757984",
                        70: "#AFB5C1",
                        80: "#DBE0EA",
                        90: "#EDEFF4",
                        95: "#F3F5F8",
                        99: "#FAFAFB",
                    },

                    neutral: {
                        10: "#101A29",
                        20: "#212E42",
                        30: "#37465C",
                        40: "#526075",
                        50: "#76808F",
                        60: "#979EA8",
                        70: "#B8BCC2",
                        80: "#D5D6D8",
                        90: "#E6E6E6",
                        95: "#F5F5F5",
                        99: "#FBFBFB",
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
