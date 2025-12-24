import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Roboto } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Feather",
  description: "A fullstack Next website"
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container ${roboto.className}`}>

        <ThemeContextProvider>

          <AuthProvider>

            <div className="container">
              <Navbar />
                {children}
              <Footer />
            </div>

          </AuthProvider>

        </ThemeContextProvider>

      </body>
    </html>
  );
}
