import { ScreenSize } from "../types/screenSize";

export const isMobileDevice = (): boolean => {
  return typeof window !== 'undefined' && window.innerWidth <= ScreenSize.Tablet;
};