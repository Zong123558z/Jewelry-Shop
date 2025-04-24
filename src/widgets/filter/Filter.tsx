import { CategoryMenu } from "@/features/category-menu/CategoryMenu";
import { FilterContent } from "@/features/filter-content/FilterContent";
import { FilterButtons } from "@/shared/filter-buttons/FilterButtons";

export const Filter = () => {
  const filterList = ['']

  return (
    <div className="md:mt-[56px] mt-[5.2vw] md:mb-[48px] mb-[5.2vw]">
      <CategoryMenu />
      <FilterContent />
      <FilterButtons filterListLength={filterList.length} resultCount={12} />
    </div>
  );
};