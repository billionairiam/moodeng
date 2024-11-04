import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const font = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'Moodeng',
  description: 'Meet MooDeng, the Iconic Pygmy Hippo Inspiring $MOODENG!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
