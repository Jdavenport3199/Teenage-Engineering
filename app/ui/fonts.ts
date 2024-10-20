import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
});

export const sf_pro = localFont({
  src: [
    {
      path: "./SF-Pro.ttf",
      style: "normal",
    },
  ],
});
