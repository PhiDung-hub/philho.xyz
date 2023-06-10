'use client';

import { clsxTailwindMerge, Fuzzy } from '~/utils';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  useFloating,
  useInteractions,
  autoUpdate,
  FloatingFocusManager,
  FloatingPortal,
  flip,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  size,
  useId,
} from '@floating-ui/react';
import { SearchIcon } from '~/components/icons';
import { BsThreeDots, BsInfoSquareFill } from 'react-icons/bs';
import { Selector } from '~/components';

export type indexTableEntry = {
  key: string;
  categories?: string[];
  desc?: string;
  href?: string;
  icon?: React.ReactElement;
  shortcut?: string[];
};
export type SearchBarProps = {
  indexTable: indexTableEntry[];
  className?: string;
  allCategories?: string[];
};

const FUZZY = new Fuzzy({
  // case-insensitive regexps
  intraChars: "[a-z\\d']",
  intraContr: "'[a-z]{1,2}\\b",
  // 1 typos tolerance
  intraMode: 1,
  intraSub: 1,
  intraTrn: 1,
  intraDel: 1,
});
export default function SearchBar(props: SearchBarProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  const click = useClick(context, { event: 'mousedown' });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([role, dismiss, listNav, click]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  }

  const router = useRouter();
  const handleEvent = (item: indexTableEntry, idx: number) => {
    const { key, href } = item;
    if (href) {
      router.push(href);
    }
    setInputValue(key);
    setOpen(false);
    setActiveIndex(idx);
  };

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const keysWithDescription = React.useMemo(
    () =>
      props.indexTable.map((item) => {
        let searchKey = item.key;
        if (item.categories) {
          searchKey = item.categories.join(' ').concat(' ' + item.key);
        }
        if (item.desc) {
          searchKey = searchKey.concat(' ' + item.desc);
        }
        return searchKey;
      }),
    [props.indexTable],
  );
  const match_indexes = React.useMemo(
    () => FUZZY.filter(keysWithDescription, inputValue.toLowerCase()),
    [keysWithDescription, inputValue],
  );
  const items = React.useMemo(
    () =>
      props.indexTable.filter((item, idx) => {
        const searchFilter = inputValue == '' || match_indexes?.includes(idx);
        const categoryFilter = selectedCategory ? item.categories?.includes(selectedCategory) : true;
        return searchFilter && categoryFilter;
      }),
    [match_indexes, selectedCategory, inputValue, props.indexTable],
  );

  return (
    <div className={clsxTailwindMerge('flex items-center w-full', props.className)}>
      <label className="sr-only">Search blog</label>
      <div className="flex w-full">
        <div className="flex-grow relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="text-gray-600 dark:text-gray-400" />
          </div>
          <input
            type="text"
            className={clsxTailwindMerge(
              'outline-0 text-lg text-opacity-100 w-full py-2.5 pl-10',
              'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 dark:placeholder-gray-400',
              props.allCategories ? 'rounded-l-lg' : 'rounded-lg',
            )}
            {...getReferenceProps({
              ref: refs.setReference,
              onChange,
              value: inputValue,
              placeholder: 'Search blog...',
              'aria-autocomplete': 'list',
              onKeyDown(event) {
                if (event.key === 'Enter' && activeIndex != null && items[activeIndex]) {
                  event.preventDefault();
                  handleEvent(items[activeIndex], activeIndex);
                }
              },
            })}
          />
          <FloatingPortal>
            {open && (
              <FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss>
                <div
                  {...getFloatingProps({
                    ref: refs.setFloating,
                    style: {
                      ...floatingStyles,
                      overflowY: 'auto',
                      borderRadius: '0.5rem',
                      zIndex: 999999,
                    },
                  })}
                  className="bg-gray-50 dark:bg-gray-700 my-1 border border-gray-300 dark:border-gray-600"
                >
                  {items.map((item, idx) => {
                    const { key, icon, shortcut, categories, desc } = item;
                    const entry: ItemEntry = { key, icon, shortcut, categories, desc };

                    return (
                      <ResultItem
                        key={`Item-${item}-${idx}`}
                        {...getItemProps({
                          ref(node) {
                            listRef.current[idx] = node;
                          },
                          onClick() {
                            handleEvent(item, idx);
                            refs.domReference.current?.focus();
                          },
                        })}
                        active={activeIndex === idx}
                        tabIndex={activeIndex === idx ? 0 : -1}
                        entry={entry}
                      />
                    );
                  })}
                </div>
              </FloatingFocusManager>
            )}
          </FloatingPortal>
        </div>
        {props.allCategories && (
          <Selector
            categories={props.allCategories}
            className="h-full w-[8rem] md:w-[12rem] rounded-r-lg"
            setSelectedCallback={(category: string) => setSelectedCategory(category)}
          />
        )}
      </div>
    </div>
  );
}

export type ItemEntry = {
  icon?: React.ReactElement;
  key: string;
  desc?: string;
  shortcut?: string[];
  categories?: string[];
};
type ItemProps = {
  entry: ItemEntry;
  active: boolean;
};
const ResultItem = React.forwardRef<HTMLDivElement, ItemProps & React.HTMLProps<HTMLDivElement>>(function ResultItem(
  { entry, active, ...rest },
  ref,
) {
  const id = useId();

  return (
    <div
      ref={ref}
      className={clsxTailwindMerge(
        'flex p-2 items-center justify-between m-0 cursor-normal',
        active ? 'bg-opacity-5 bg-black dark:!bg-opacity-5 dark:bg-white' : '',
      )}
      id={id}
      {...rest}
      style={{
        ...rest.style,
      }}
    >
      <div className="block">
        <div className="flex gap-2 text-xl items-center">
          {entry.icon ?? <BsThreeDots size={24} />}
          <span>{entry.key}</span>
        </div>
        {entry.desc && (
          <p className="flex gap-2 text-lg items-center">
            <BsInfoSquareFill size={16} className="mx-1" />
            <span>{entry.desc.split(' ').slice(0, 7).join(' ')}...</span>
          </p>
        )}
      </div>
      {entry.categories && (
        <div className="hidden md:grid grid-flow-col gap-2 text-lg" aria-hidden>
          {entry.categories.slice(0, 3).map((category: string, idx) => (
            <kbd
              key={`item-category-key-${category}-${idx}`}
              className="rounded-[4px] py-1 px-3 capitalize bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10"
            >
              {category}
            </kbd>
          ))}
        </div>
      )}
      {entry.shortcut && (
        <div className="grid grid-flow-col gap-2 text-lg" aria-hidden>
          {entry.shortcut.map((shortcut: string, idx) => (
            <kbd
              key={`search-key-${shortcut}-${idx}`}
              className="rounded-[4px] py-1 px-3 uppercase bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10"
            >
              {shortcut}
            </kbd>
          ))}
        </div>
      )}
    </div>
  );
});
