import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Roboto } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container ${roboto.className}`}>

        <ThemeContextProvider>

          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>

        </ThemeContextProvider>

      </body>
    </html>
  );
}
