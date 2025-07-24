import type { Config } from 'tailwindcss'

export default {
  content: [
    "./pages/**/*.{js,ta,jsx,tsx,mdx}",
    "./components/**/*.{js,ta,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // backgroundImage: {
    //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        card: "var(--card)",
      },
    },
  },
  plugins: [],
} satisfies Config