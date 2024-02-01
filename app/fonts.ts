import {
  Montserrat,
  Noto_Sans,
  Noto_Serif,
  Roboto,
  Raleway,
} from "next/font/google";
export const notoSans = Noto_Sans({ subsets: ["latin"] });
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});
export const notoSerif = Noto_Serif({ subsets: ["latin"], weight: ["400"] });
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700"],
});
