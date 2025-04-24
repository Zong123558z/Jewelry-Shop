'use client'

interface IProps {
  list: {title: string, value: string}[]
  activeValue: string
  setActiveValue: (activeValue: string) => void
  className?: string
}

export const SelectMenu = ({ list, activeValue, className, setActiveValue }: IProps) => {
  return (
    <ul className={`w-full border-b-[1px] border-gray-text flex md:justify-start justify-between md:gap-[20px] gap-[0px] p-[0px_0px_0px_54px] ${className ? className : ''}`}>
      {list.map(({title, value}, index) => (
        <li onClick={() => setActiveValue(value)} key={index} className={`flex flex-col cursor-pointer cormorantSC`}>
          <div className="md:p-[0px_14px_6px] p-[0vw_1.07vw_2.5vw]">
            <p className={`transition-all md:text-[23px] text-[4.27vw] font-medium ${activeValue === value ? 'text-black': 'text-gray'}`}>{title}</p>
          </div>
          <div className={`w-full h-[2px] transition-all rounded-[2px_2px_0px_0px] ${activeValue === value ? 'bg-purple' : 'bg-transparent'}`}></div>
        </li>
      ))}
    </ul>
  );
};