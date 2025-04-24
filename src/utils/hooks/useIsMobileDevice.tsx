import { useEffect, useState } from "react";
import { isMobileDevice } from "../libs/isMobileDevice";
import { setIsMobileDevice, useAppDispatch } from "@/views/store";

export const useIsMobileDevice = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const checkIfMobile = () => {
      if (!isMobileDevice()) {
        dispatch(setIsMobileDevice(false))
      }else{
        dispatch(setIsMobileDevice(true))
      }
    }

    checkIfMobile()

    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
};