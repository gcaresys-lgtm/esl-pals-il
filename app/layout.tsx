import "./globals.css";
import Header from "@/components/Header";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "ESL Pals IL — מסלול A2-B1",
  description: "מסלול לימודי אנגלית A2-B1 לישראלים — 12 יחידות, 7 דקות ביום",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} min-h-screen bg-zinc-50 text-zinc-900 antialiased`}>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
