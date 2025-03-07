/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background_dark: "var(--background-dark)",
        background: "var(--background)",
        foreground_dark: "var(--foreground-dark)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        text_dark: "var(--text-dark)",
        activ: "var(--activ)",
        text_gray: "var(--text-gray)",
        income: "var(--income)",
        outcome: "var(--outcome)",

      },
    },
  },
  plugins: [],
};
