import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <div className="hidden md:flex flex-col top-[60vh] left-0 fixed z-[999]">
      <ul>
        {links.map(({ desc, icon, href }, index) => (
          <li
            key={`social-link-${index}`}
            className="flex justify-between items-center w-[9rem] h-14 px-4 ml-[-5rem] hover:ml-[-0.5rem] duration-300 hover:rounded-md font-semibold 
            bg-gray-200 text-gray-700 hover:text-blue-600 dark:text-gray-100  dark:bg-gray-600 dark:hover:text-blue-300"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={false}
              target="_blank"
              rel="noreferrer"
            >
              {desc} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

const links = [
  {
    desc: 'LinkedIn',
    icon: <FaLinkedin size={32} />,
    href: 'https://linkedin.com/in/phi-dung-ho',
  },
  {
    desc: 'GitHub',
    icon: <FaGithub size={32} />,
    href: 'https://github.com/phidung-hub',
  },
  {
    desc: 'Email',
    icon: <HiOutlineMail size={32} />,
    href: 'mailto:philho.dev@outlook.com',
  },
];
