'use client'
import { BrandList } from "@/shared/brand-list/BrandList";
import { FilterList } from "@/features/filter-list/FilterList";

export const FilterContent = () => {
  return (
    <div className="md:grid flex flex-col 2xl:grid-cols-3 grid-cols-2 2xl:gap-[67px_15px] md:gap-[40px_12px] gap-[2.67vw] md:mt-[40px] mt-[5.34vw] auto-rows-max">
      <BrandList />
      <div className="md:grid flex flex-col 2xl:col-span-2 col-span-1 grid-cols-2 2xl:gap-[67px_15px] md:gap-[40px_12px] gap-[2.67vw] auto-rows-max">
        <FilterList />
      </div>
    </div>
  );
};