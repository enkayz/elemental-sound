import '@/styles/globals.css';
import { Montserrat, Open_Sans } from 'next/font/google';
import Layout from '@/layouts/Layout';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} ${openSans.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
} 