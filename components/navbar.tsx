// app/components/NavBar.tsx
"use client"; // 这个组件是客户端组件

import { ModeToggle } from "@/components/mode-toggle";
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // 用于控制导航栏的状态

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight sm:text-4xl text-red-500">
          小报童精选专栏
        </h1>
        <div className="ml-auto md:hidden">
          <button onClick={toggleNav} className="text-gray-700 focus:outline-none">
            {/* 这里可以使用图标，例如汉堡菜单图标 */}
            <span className="material-icons">menu</span>
          </button>
        </div>
        <nav className={`ml-auto text-base font-medium space-x-6 ${isNavOpen ? 'block' : 'hidden'} md:flex`}>
          <Link href="/">首页</Link>
          <Link href="/about">关于本站</Link>
        </nav>
        <div className="ml-6">
          <ModeToggle />
        </div>
      </div>
      {/* 移动端下拉导航 */}
      <div className={`md:hidden ${isNavOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-950 border-t border-gray-200`}>
        <nav className="flex flex-col space-y-2 p-4">
          <Link href="/" className="text-base font-medium">首页</Link>
          <Link href="/about" className="text-base font-medium">关于本站</Link>
        </nav>
      </div>
    </header>
  );
}
