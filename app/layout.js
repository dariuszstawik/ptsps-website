// import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/global-components/navbar";
import Footer from "@/components/global-components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
