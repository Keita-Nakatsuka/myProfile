import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'profile site',
  description: 'Next.jsで作成したプロフィールサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className="pt-20">{children}</div> {/* ヘッダー分のスペース */}
      </body>
    </html>
  );
}
