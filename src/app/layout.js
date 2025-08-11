import { Header } from "@/components/layouts/Header";
import "./globals.css";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "MINDSELF",
  description: "Centro de Psicología MINDSELF Descrubre el camino hacia el bienestar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="grow overflow-hidden mt-[130px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
