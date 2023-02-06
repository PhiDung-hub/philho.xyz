import './globals.css';
import { Footer, NavigationBar, SocialLinks } from '~/layouts/globals';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <SocialLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
