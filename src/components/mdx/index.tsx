export { default as Code } from './Code';
export { default as Quote } from './Quote';

import { Image } from '~/components';
import type { MDXComponents } from 'mdx/types';
import { ReactNode, Children, isValidElement, cloneElement, createElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CodeBlock from './Code';
import Annotation from './Annotation';
import Quote from './Quote';

function replacePTagsWithSpans(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (typeof child === 'string') {
      return child;
    }

    if (isValidElement(child) && child.type === 'p') {
      // Replace <p> with <span>
      return createElement('span', child.props, child.props.children);
    }

    child = child as ReactNode;
    if (isValidElement(child) && child.props && child.props.children) {
      // Recursively call the function for nested children
      const processedChild = replacePTagsWithSpans(child.props.children);
      return cloneElement(child, child.props, processedChild);
    }

    return child;
  });
}

const textToId = (children: ReactNode): string => {
  return (children as string).replace(' ', '-');
};

const CustomMDXComponents: MDXComponents = {
  Image,
  Annotation,
  Quote,
  h1: ({ children }) => (
    <h1 className="font-bold text-2xl py-4 text-blue-500 dark:text-blue-200" id={textToId(children)}>
      <a href={`#${textToId(children)}`}>{children}</a>
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-semibold text-xl py-3 text-blue-500 dark:text-blue-200" id={textToId(children)}>
      <a href={`#${textToId(children)}`}>{children}</a>
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-semibold text-lg py-2 text-blue-500 dark:text-blue-200" id={textToId(children)}>
      <a href={`#${textToId(children)}`}>{children}</a>
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-medium text-md py-1 text-blue-500 dark:text-blue-200" id={textToId(children)}>
      <a href={`#${textToId(children)}`}>{children}</a>
    </h4>
  ),
  a: ({ href, children }) => (
    <a href={href} target="_blank" className="text-sky-600 dark:text-rose-300 hover:underline">
      {children}
    </a>
  ),
  // p: ({ children }) => <p className="py-2">{children}</p>,
  ul: ({ children }) => {
    const listItems = Children.map(children, (item, index) => {
      if (isValidElement(item) && item.type === 'li') {
        return (
          <li key={`${uuidv4()}-${index}`}>
            <span className="font-mono font-semibold">&bull; </span>
            {replacePTagsWithSpans(item.props.children)}
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
            {replacePTagsWithSpans(item.props.children)}
          </li>
        );
      }
      return item;
    });
    return <ol className="pl-4 py-1">{listItems}</ol>;
  },
  pre: CodeBlock,
  code: ({ children }) => {
    return <code className="opacity-80 dark:opacity-100 dark:text-stone-400">{children}</code>;
  },
};

export default CustomMDXComponents;
