'use client';

import { FaCopy } from 'react-icons/fa';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>> = ({ children }) => {
  const [isCopied, setCopied] = React.useState(false);

  const $code = React.Children.toArray(children)[0] as React.ReactElement;
  const codeString: string = $code.props.children.trim() ?? '';
  let language = $code.props.className.match(/language-(.*)/)[1] ?? 'bash';
  language = SyntaxHighlighter.supportedLanguages.includes(language) ? language : 'bash';

  const onCopy = async () => {
    setCopied(true);

    await navigator.clipboard.writeText(codeString);
  };

  React.useEffect(() => {
    if (!isCopied) return;

    const timerId = window.setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [isCopied]);

  const customCodeStyle = {
    background: 'transparent',
    maxHeight: '80vh',
    code: { background: 'transparent' },
  };

  return (
    <pre className="bg-gray-200 dark:bg-gray-800 rounded-md shadow-sm my-2 overflow-auto">
      <div className="flex justify-between bg-gray-300 dark:bg-gray-900 rounded-t-md py-2 px-4">
        <div className="font-semibold uppercase">{language}</div>
        <button className="top-2 right-4" onClick={onCopy}>
          {isCopied ? (
            <div className="inline-flex text-green-500 dark:text-green-300">
              <BsBookmarkCheckFill size={20} />
              <span className="pl-2">Copied</span>
            </div>
          ) : (
            <div className="inline-flex hover:text-blue-500 dark:hover:text-blue-200">
              <FaCopy size={20} />
              <span className="pl-2">Copy</span>
            </div>
          )}
        </button>
      </div>
      <div className="rounded-b-md">
        <SyntaxHighlighter language={language} style={oneDark} customStyle={customCodeStyle} showLineNumbers className="hidden dark:block">
          {codeString}
        </SyntaxHighlighter>
        <SyntaxHighlighter language={language} style={oneLight} customStyle={customCodeStyle} showLineNumbers className="block dark:hidden">
          {codeString}
        </SyntaxHighlighter>
      </div>
    </pre>
  );
};

export default CodeBlock;
