import { BasketContent } from "@/widgets/basket-content/BasketContent";
import { OrderInfo } from "@/widgets/order-info/OrderInfo";

export default function Page() {
  return (
    <div className='2xl:w-[1223px] lg:w-[900px] md:w-[650px] w-full md:p-[0px_15px] p-[4.00vw_0px_0px] md:m-[63px_auto_166px] m-[0px]'>
      <div className="lg:flex grid grid-cols-1 justify-between items-start">
        <BasketContent />
        <OrderInfo />
      </div>
    </div>
  )
}
