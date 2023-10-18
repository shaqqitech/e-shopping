import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const pacifico = Pacifico({
//   subsets: ['latin'],
//   weight: ['400'],
//   display: 'swap'
// })

export const metadata = {
  title: "E-Shopping",
  description: "E-Shopping by ShaqqiTech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} scrollbar-hide`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
