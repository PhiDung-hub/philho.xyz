import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="self-center text-center bg-transparent">
      <div className="pt-5 flex flex-col items-center">
        <div className="flex mb-4 space-x-6">
          {links.map(({ icon, href }, index) => (
            <a key={`footer-link-${index}`} href={href} target="_blank" rel="noreferrer">
              {icon}
            </a>
          ))}
        </div>
        <div className="mb-4 flex">
          <div>Phil Ho </div>
          <div className="ml-1">{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}

const links = [
  {
    icon: (
      <FaLinkedin size={32} className="text-gray-700 dark:text-gray-50 hover:text-blue-500 dark:hover:text-blue-300" />
    ),
    href: 'https://linkedin.com/in/phi-dung-ho',
  },
  {
    icon: (
      <FaGithub size={32} className="text-gray-700 dark:text-gray-50 hover:text-blue-500 dark:hover:text-blue-300" />
    ),
    href: 'https://github.com/phidung-hub',
  },
  {
    icon: (
      <HiOutlineMail
        size={32}
        className="text-gray-700 dark:text-gray-50 hover:text-blue-500 dark:hover:text-blue-300"
      />
    ),
    href: 'mailto:philho.dev@outlook.com',
  },
];
