import "./globals.css";
import { DM_Sans, Space_Grotesk } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk"
});

export const metadata = {
  title: "Accelio Lab | AI Infrastructure Consulting",
  description:
    "Accelio Lab designs and builds AI infrastructure for medium to large businesses, enabling scalable, production-grade AI systems."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
