import { Image } from '~/components';
import type { MDXComponents } from 'mdx/types';
import { ReactNode, Children, isValidElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CodeBlock from './Code';

const textToId = (children: ReactNode): string => {
  return (children as string).replace(' ', '-');
};

const CustomMDXComponents: MDXComponents = {
  Image,
  h1: ({ children }) => (
    <h1 className="font-bold text-2xl py-4 text-blue-500 dark:text-blue-200" id={textToId(children)}>
      <a href={`#${textToId(children)}`}>{children}</a>
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-semibold text-xl py-3" id={textToId(children)}>
      <a href={`#${textToId(children)}`}>{children}</a>
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-semibold text-lg py-2" id={textToId(children)}>
      <a href={`#${textToId(children)}`}>{children}</a>
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-medium text-md py-1" id={textToId(children)}>
      <a href={`#${textToId(children)}`}>{children}</a>
    </h4>
  ),
  a: ({ href, children }) => (
    <a href={href} target="_blank" className="text-sky-600 dark:text-sky-200 hover:underline">
      {children}
    </a>
  ),
  p: ({ children }) => <p className="py-2">{children}</p>,
  ul: ({ children }) => {
    const listItems = Children.map(children, (item, index) => {
      if (isValidElement(item) && item.type === 'li') {
        return (
          <li key={`${uuidv4()}-${index}`}>
            <span className="font-mono font-semibold">- </span>
            {item.props.children}
          </li>
        );
      }
      return item;
    });
    return <ul className="pl-4 py-1">{listItems}</ul>;
  },
  ol: ({ children }) => {
    let liIndex = 0;
    const listItems = Children.map(children, (item, index) => {
      if (isValidElement(item) && item.type === 'li') {
        liIndex += 1;
        return (
          <li key={`${uuidv4()}-${index}`}>
            <span className="font-mono">{liIndex}. </span>
            {item.props.children}
          </li>
        );
      }
      return item;
    });
    return <ol className="pl-4 py-1">{listItems}</ol>;
  },
  pre: CodeBlock,
};

export default CustomMDXComponents;
