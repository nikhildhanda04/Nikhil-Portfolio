import type { Metadata } from "next";
import { Poppins, Big_Shoulders_Display } from "next/font/google";
import "./globals.css";


const bigshoulders = Big_Shoulders_Display({
  variable: "--font-big-shoulders-display",
  subsets: ["latin"]
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Nikhil Dhanda Portfolio",
  description: "This is the Portfolio website of Nikhil Dhanda",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${bigshoulders.variable} antialiased bg-[#121212]`}
      >
        {children}
      </body>
    </html>
  );
}
