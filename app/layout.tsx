
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";


import Index from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "小报童精选 | 发现有价值的内容",
  description: "小报童101，关于小报童的一切",
  keywords: ["小报童", "精选", "专栏"],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-background dark:bg-slate-950 text-slate-900 dark:text-slate-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-4xl mx-auto py-10 px-4">
            <Index></Index>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
