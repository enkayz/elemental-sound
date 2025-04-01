import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata = {
  title: 'Elemental Sound - Professional Audio Services',
  description: 'Professional audio solutions for every creator, from emerging artists to established studios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
