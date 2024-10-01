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
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} font-roboto antialiased flex flex-col justify-between min-h-screen`}
      >
        <Menu op1="Page 1" op2="Page 2" op3="Page 3" op4="Page 4"/>
        {children}
        <Footer Name="Eduardo Ribeiro" Year={2024} Show={true}/>
      </body>
    </html>
  );
}
