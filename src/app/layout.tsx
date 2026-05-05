import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerAssistant from '@/components/careerAssitance';


export const metadata = {
  title: 'Your App',
  description: 'Converted Next.js App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-brand-tertiary focus:text-white focus:rounded-xl focus:font-bold focus:shadow-2xl"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <CareerAssistant />
        <Footer />
      </body>
    </html>
  );
}