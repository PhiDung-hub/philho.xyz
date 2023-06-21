'use client';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import React from 'react';
import {
  useFloating,
  useInteractions,
  autoUpdate,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  flip,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  size,
} from '@floating-ui/react';
import { clsxTailwindMerge } from '~/utils';

export type SelectorProps = { categories: string[]; className?: string; setSelectedCallback?: any };
const DEFAULT_SELECT = '__ALL__';

export default function Selector(props: SelectorProps) {
  const [isSelect, setIsSelect] = React.useState<boolean>(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const { refs, context, floatingStyles } = useFloating({
    open: isSelect,
    onOpenChange: setIsSelect,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const allCategories = [DEFAULT_SELECT, ...props.categories];
  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  const click = useClick(context, { event: 'mousedown' });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([dismiss, role, listNav, click]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setIsSelect(false);
    if (props.setSelectedCallback) {
      const selectedCategory = allCategories[index] === DEFAULT_SELECT ? null : allCategories[index];
      props.setSelectedCallback(selectedCategory);
    }
  };

  const selectedItemLabel = selectedIndex !== null ? allCategories[selectedIndex] : DEFAULT_SELECT;

  return (
    <div>
      <button
        className={clsxTailwindMerge(
          'inline-flex items-center px-2 md:px-4 text-center bg-gray-50 dark:bg-gray-700',
          '!outline-0 border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600',
          props.className,
        )}
        ref={refs.setReference}
        aria-labelledby="select-category"
        {...getReferenceProps()}
      >
        <p className="text-sm md:text-lg capitalize flex-grow">
          {selectedItemLabel !== DEFAULT_SELECT ? `${selectedItemLabel}` : 'Select category'}
        </p>
        {isSelect ? (
          <BsChevronUp className="ml-2 mt-1" width={16} height={16} />
        ) : (
          <BsChevronDown className="ml-2 mt-1" width={16} height={16} />
        )}
      </button>

      {isSelect && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className="!outline-0 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg"
              {...getFloatingProps()}
              style={{
                ...floatingStyles,
                zIndex: 999999,
              }}
            >
              {allCategories.map((category, idx) => {
                return (
                  <div
                    key={`blog-category-${idx}`}
                    ref={(node) => {
                      listRef.current[idx] = node;
                    }}
                    tabIndex={idx === activeIndex ? 0 : -1}
                    role="option"
                    aria-selected={idx === selectedIndex && idx === activeIndex}
                    className="px-2 py-1 cursor-pointer capitalize hover:bg-opacity-5 
                    hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-5"
                    {...getItemProps({
                      onClick() {
                        handleSelect(idx);
                      },
                      onKeyDown(event) {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          handleSelect(idx);
                        }
                      },
                    })}
                  >
                    {category !== DEFAULT_SELECT ? (
                      category
                    ) : (
                      <strong className="inline font-semibold">NO FILTER</strong>
                    )}
                    <span
                      aria-hidden
                      style={{
                        position: 'absolute',
                        right: 10,
                        fontWeight: 700,
                      }}
                    >
                      {idx === selectedIndex ? '✓' : ''}
                    </span>
                  </div>
                );
              })}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </div>
  );
}
