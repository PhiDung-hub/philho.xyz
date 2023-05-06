import './globals.css';
import { Footer, NavigationBar, SocialLinks } from '~/layouts/globals';
import { DarkModeProvider } from '~/providers/DarkModeProvider';
// import Cookies from 'js-cookie';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // let isDarkModeCookie = Cookies.get('isDarkMode');
  // let isDarkMode = true;
  // if (isDarkModeCookie) {
  //   isDarkMode = JSON.parse(isDarkModeCookie);
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }

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
};

export default RootLayout;
