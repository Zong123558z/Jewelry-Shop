'use client'
import { Slider } from '@mui/material';
import { useState, useRef, useEffect } from 'react';

interface IProps {
  progress: number;
}

export const ProgressBar = ({ progress }: IProps) => {
  return (
    <div className="w-full relative">
      <div className="w-full bg-[#00000033] rounded-[5px] h-[2px]"></div>
      <div
        style={{ width: `${progress}%` }}
        className="md:h-[4px] h-[3px] transition-all rounded-[5px] bg-purple relative translate-y-[-3px]"
      >
        <div className="md:w-[12px] w-[8px] aspect-square rounded-full bg-purple absolute md:top-[-4px] top-[-2px] right-0" />
      </div>
    </div>
  );
};
