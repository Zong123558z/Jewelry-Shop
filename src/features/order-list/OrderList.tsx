import { OrderItem } from "@/shared/order-item/OrderItem";

export const OrderList = () => {
  return (
    <div className="lg:p-[30px_42px_0px] p-[5.34vw_0px_0px] flex flex-col md:gap-[15px] gap-[2.67vw]">
      {/* {orderList.map((item, index) => (
        <OrderItem key={index} {...item} />
      ))} */}
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
};