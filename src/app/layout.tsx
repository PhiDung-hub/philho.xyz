import './globals.css';
import { Footer, NavigationBar, SocialLinks } from '~/layouts/globals';
import { DarkModeProvider } from '~/providers/DarkModeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <html lang="en">
        <body className="overflow-x-hidden">
          <NavigationBar />
          <SocialLinks />
          <div className="custom-container mx-auto">{children}</div>
          <Footer />
        </body>
      </html>
    </DarkModeProvider>
  );
}
