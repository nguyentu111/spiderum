import {
  Montserrat,
  Noto_Sans,
  Noto_Serif,
  Roboto,
  Raleway,
} from "next/font/google";
export const notoSans = Noto_Sans({ subsets: ["latin"], display: "block" });
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "block",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "block",
});
export const notoSerif = Noto_Serif({ subsets: ["latin"], weight: ["400"] });
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700"],
  display: "block",
});
