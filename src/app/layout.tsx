import './globals.css';
import { Footer, NavigationBar, SocialLinks } from '~/layouts/globals';
import { setupThemeManager } from '~/providers/ThemeProvider';

const description =
  "Hi, I'm Phil Ho from NTU Singapore. I love to experiment with new technologies. My interest are DeFi, Web Simulations, and System Design";
export const metadata = {
  metadataBase: new URL('https://philho.xyz'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | Phil Ho',
    absolute: 'Portfolio | Phil Ho',
  },
  description,
  creator: 'Phil Ho',
  openGraph: {
    type: 'website',
    title: 'Portfolio | Phil Ho',
    description,
    siteName: 'philho.xyz',
    url: 'https://philho.xyz',
    images: [
      {
        url: 'https://philho.xyz/og/index.webp',
        alt: 'Phil Ho portfolio',
        width: 728,
        height: 676,
        type: 'image/webp',
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${setupThemeManager.toString()})();`,
          }}
        />
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
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
