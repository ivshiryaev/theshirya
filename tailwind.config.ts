import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        whiteText:'#F0F0F0',
        background:'#F6F6F6',
        gray:'#717171',
        grayDark:'#525252',
        darkText:'#232323',
        darkBackground:'#242424',
        yellow:'#FEFE35',
        purple:'#AF2EEC',
        green:'#2FD6AE',
        blue:'#2F86D6',
        raspberry:'#C51A80',
      },
      boxShadow:{
        'neumorphism-flat': '4px 4px 10px 0px #DDD, -4px -4px 10px 0px #FFF',
        'neumorphism-inset': '8px 8px 10px 0px #DDD inset, -8px -8px 10px 0px #FFF inset',
      },
      backgroundImage:{
        'concave':'linear-gradient(145deg, #e1e1e1, #ffffff)',
        'convex':'linear-gradient(145deg, #ffffff, #e1e1e1)'
      }
    },
  },
  plugins: [],
}
export default config
