'use client';

import { FaCopy } from 'react-icons/fa';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import React from 'react';
import { toast } from 'react-hot-toast';

type PreProps = {
  'data-language': string;
  'data-theme': string;
  children: React.ReactNode;
};

const CopyCallout = (props: PreProps) => {
  const { children, 'data-theme': theme, 'data-language': language } = props;
  const textInput = React.useRef<HTMLPreElement>(null);
  const [isCopied, setCopied] = React.useState(false);

  const onCopy = async () => {
    setCopied(true);

    if (!navigator?.clipboard) {
      toast.error('Access to clipboard rejected!');
    }

    try {
      if (textInput.current && textInput.current?.textContent !== null) {
        await navigator.clipboard.writeText(textInput.current.textContent);
        toast.success('Copied');
      }
    } catch {
      toast.error('Failed to copy!');
    }
  };

  React.useEffect(() => {
    if (!isCopied) return;

    const timerId = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  return (
    <>
      <pre className="relative" data-theme={theme} data-language={language} ref={textInput}>
        {children}
      </pre>
      <button className="absolute top-4 right-4 opacity-0 transition [div:hover>&]:opacity-100" onClick={onCopy} data-theme={theme}>
        {isCopied ? <BsBookmarkCheckFill size={20} /> : <FaCopy size={20} />}
      </button>
    </>
  );
};

export default CopyCallout;
