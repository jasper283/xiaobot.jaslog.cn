import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

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
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-3xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight sm:text-4xl text-red-500">
                  小报童精选专栏
                </h1>
                <nav className="ml-auto text-base font-medium space-x-6">
                  <Link href="/">首页</Link>
                  <Link href="/about">关于本站</Link>

                </nav>
                <div className="ml-6">
                  <ModeToggle />
                </div>

              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
