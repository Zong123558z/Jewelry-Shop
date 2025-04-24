import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string
}

export const BottomFixedWrapper = ({children, className}: IProps) => {
  return (
    <div 
      style={{boxShadow: 'box-shadow: 0px 0px 8px 0px #0000001A'}} 
      className={`md:hidden block fixed z-[50] w-full h-[27.74vw] bottom-0 left-0 p-[5.87vw_11.75vw_0vw] bg-white ${className ? className : ''}`}
    >
      {children}
    </div>
  );
};