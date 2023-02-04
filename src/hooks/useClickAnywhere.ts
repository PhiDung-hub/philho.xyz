import useEventListener from './useEventListener';

type Handler = (event: MouseEvent) => void;

// This hook allow event to be called when user click anywhere in the browser.
function useClickAnyWhere(handler: Handler) {
  useEventListener('click', (event) => {
    handler(event);
  });
}

export default useClickAnyWhere;
