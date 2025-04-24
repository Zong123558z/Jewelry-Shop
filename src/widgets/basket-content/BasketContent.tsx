import { BasketList } from "@/features/basket-list/BasketList";

export const BasketContent = () => {
  const basketValue = 3

  return (
    <div className="2xl:w-[540px] lg:w-[450px] w-full flex flex-col gap-[30px] md:p-[0px] p-[0px_6.14vw]">
      <div className="flex items-center md:gap-[7px] gap-[1.87vw] md:mt-0 mt-[3vw]">
        <h4 className="cormorantSC md:text-[30px] text-[6.67vw] font-bold">Корзина</h4>
        {true && (
          <div className="md:w-[28px] w-24px aspect-square rounded-full flex items-center justify-center bg-purple text-white font-semibold md:text-[18px] text-[3.73vw]">{basketValue}</div>
        )}
      </div>
      <BasketList />
    </div>
  );
};