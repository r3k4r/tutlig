import Navbar from "@/components/Navbar";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Tutelage",
  description: "Empowering English Learning",
  keywords: "English, Learning, Tutelage, Education, Language Institute",
 }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
