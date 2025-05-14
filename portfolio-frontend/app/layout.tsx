import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/nav-bar/nav-bar';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const vt = VT323({
  variable: '--font-vt',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Joshua Wainwright',
  description: 'Personal Portfolio of Joshua Wainwright',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <body className={`${vt.className} flex h-dvh`}>
        <NavBar />
        <div className={`flex h-dvh w-full items-center justify-center antialiased`}>
          {children}
        </div>
      </body>
    </html>
  );
}
