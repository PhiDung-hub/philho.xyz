import './globals.css';
import { Footer, NavigationBar, SocialLinks } from '~/layouts/globals';
import { setupThemeManager } from '~/providers/ThemeProvider';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${setupThemeManager.toString()})();`,
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <NavigationBar />
        <SocialLinks />
        <div className="custom-container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
