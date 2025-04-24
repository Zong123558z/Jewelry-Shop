'use client'
import { SelectMenu } from "@/shared/select-menu/SelectMenu";
import { useState } from "react";

const catalogList = [
  {title: 'Серьги', value: 'earrings'},
  {title: 'Кольца', value: 'rings'},
  {title: 'Колье', value: 'necklace'},
  {title: 'Браслеты', value: 'bracelets'},
]

interface IProps {
  className?: string
}

export const CategoryMenu = ({className}: IProps) => {
  const [activeCatalog, setActiveCatalog] = useState(catalogList[0].value)

  return (
    <div className={`md:mt-[0px] mt-[4.80vw] ${className ? className: ""}`}>
      <SelectMenu 
        list={catalogList} 
        activeValue={activeCatalog} 
        setActiveValue={setActiveCatalog}
        className="!p-[0px_3.21vw]"
      />
    </div>
  );
};