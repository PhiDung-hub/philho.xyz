import './globals.css';
import { Footer, NavigationBar, SocialLinks } from '~/layouts/globals';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-gray-50 to-white dark:bg-gradient-to-t dark:from-gray-900 dark:to-black">
        <NavigationBar />
        <SocialLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
