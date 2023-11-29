import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Montserrat'],
        'body': ['"Open Sans"'],
      },
      colors: {
        slate: '#3D5781',
        purple: '#6675FF',
        ltPurple: '#b3baff',
        midnight: '#06001E',
        calmingBreeze: '#8591FF',
        ltGrey: '#f2f2f2',
      },
    },
  },
  plugins: [],
}
export default config
