import localFont from "next/font/local";
import { Roboto } from "next/font/google";

import "./globals.css";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  weight: ["100", "400", "900",],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"]
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} font-roboto antialiased flex flex-col justify-between min-h-screen bg-slate-400`}
      >
        <Menu op1="Home" op2="Math" op3="Functions" op4="Tailwind Test" op5="Fetch" op6="Axios" op7="Server-side"/>
        {children}
        <Footer Name="Eduardo Ribeiro" Year={2024} Show={true}/>
      </body>
    </html>
  );
}
