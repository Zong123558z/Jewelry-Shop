'use client'
import { useIsMobileDevice } from "@/utils/hooks/useIsMobileDevice";
import { PropsWithChildren } from "react";

export const IsMobileDeviceWrapper = ({children}: PropsWithChildren) => {
  useIsMobileDevice()

  return children
};