import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import "@uploadthing/react/styles.css";
import { Navbar } from '../components';
import { Provider } from './Provider';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DashboardWebApp',
  description: 'Dashboard for you E-commerce business  ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:text-black dark:bg-white duration-300 ease-in-out transition">
        <Provider>
          <Providers>
            <Navbar />
            <main className=" content dark:text-text-color dark:bg-bg-dark duration-300 ease-in-out transition z-40">
              {children}
            </main>
          </Providers>
        </Provider>
      </body>
    </html>
  );
}
