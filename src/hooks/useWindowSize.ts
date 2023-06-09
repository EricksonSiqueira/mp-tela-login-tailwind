import { useEffect, useState } from 'react';

export interface WindowSizes {
  width: number;
  height: number;
  isMobile: boolean;
  isHorizontal: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}

const useWindowSize = () => {
  const isMobileRedux = true;
  const isTabletRedux = false;
  const isDesktopRedux = false;
  const isMobile = !!isMobileRedux;
  const [windowSize, setWindowSize] = useState<WindowSizes>({
    width: 360,
    height: 0,
    isMobile,
    isHorizontal: false,
    isDesktop: isDesktopRedux,
    isTablet: isTabletRedux,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isHorizontal: window.innerHeight <= 612,
        isTablet: window.innerWidth >= 768 && window?.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      });
    }

    window?.addEventListener(`resize`, handleResize);

    handleResize();

    return () => window?.removeEventListener(`resize`, handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
