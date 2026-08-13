import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "灵伴 AI 数字家人",
  description: "有记忆、懂情绪、能陪伴的 AI 数字家人。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
