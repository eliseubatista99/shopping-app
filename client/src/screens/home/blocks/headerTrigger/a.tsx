import React, { useState, type RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  );

  React.useEffect(() => {
    if (ref?.current) {
      observer.observe(ref?.current);
    }
    return () => observer.disconnect();
  }, [ref, observer.disconnect, observer.observe]);

  return isIntersecting;
}
