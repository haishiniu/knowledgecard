
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Providers>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </Providers>
  );
}
