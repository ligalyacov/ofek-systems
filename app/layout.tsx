import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "אופק מערכות | טכנולוגיה חכמה. ראש שקט.",
  description:
    "פתרונות אבטחה ותקשורת מתקדמים לבתים פרטיים, עסקים וחברות עם ניסיון, שירות וסטנדרט ביצוע מאז 1991.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={assistant.variable}>{children}</body>
    </html>
  );
}
