import { useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";

export function useClampedIsInViewport(options) {
  const [isInViewport, targetRef] = useIsInViewport();
  const [wasInViewportAtleastOnce, setWasInViewportAtleastOnce] = useState(
    isInViewport
  );

  useEffect(() => {
    setWasInViewportAtleastOnce((prev) => {
      // this will clamp it to the first true
      // received from useIsInViewport
      if (!prev) {
        return isInViewport;
      }
      return prev;
    });
  }, [isInViewport]);

  return [wasInViewportAtleastOnce, targetRef];
}
