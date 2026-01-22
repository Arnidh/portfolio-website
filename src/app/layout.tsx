import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-headline' });

export const metadata: Metadata = {
  title: 'Mehul Goyal | Portfolio',
  description: 'Technical portfolio for Mehul Goyal, a software and AI engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
