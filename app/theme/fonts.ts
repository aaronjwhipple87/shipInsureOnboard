import { Montserrat, Open_Sans } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

/** App Fonts */
export const fonts = {
  body: openSans.style.fontFamily,
  heading: montserrat.style.fontFamily,
};