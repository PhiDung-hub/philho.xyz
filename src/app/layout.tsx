import './globals.css';
import { Footer, NavigationBar, SocialLinks } from '~/layouts/globals';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <NavigationBar />
        <SocialLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
