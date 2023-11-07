/** @type {import('tailwindcss').Config} */
export default {
  content: [

    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/AboutUs/Group33745.png')",
        'card-img1':"url('./src/assets/images/homepage/Maskgroup2.png')"
       
      }
  
    },
  },
  plugins: [
    ('flowbite/plugin')
  ],
}

