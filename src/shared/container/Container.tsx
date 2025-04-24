import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string
}

export const Container = ({children, className}: IProps) => {
  return (
    <div className={className? className: ''}>
      <div className="2xl:w-[1414px] lg:w-[1000px] md:w-[750px] w-full md:p-[0px_15px] p-[0px_13px] m-[0px_auto]">
        {children}
      </div>
    </div>
  );
};