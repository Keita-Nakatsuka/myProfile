'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-stone-950 bg-opacity-70 text-white fixed top-0 left-0 z-50 shadow-md backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          MyProfile
        </Link>
        <nav className="space-x-4">
          <Link href="#career" className="hover:underline">経歴</Link>
          <Link href="#skill" className="hover:underline">Skill</Link>
        </nav>
      </div>
    </header>
  );
}
