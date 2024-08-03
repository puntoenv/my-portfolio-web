/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#9C7BF4",
        "dark-blue": "#422199",
      },
    },
  },
  plugins: [],
};
