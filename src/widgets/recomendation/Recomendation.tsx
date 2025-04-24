import { productList } from "@/utils/const/productList";
import { ProductList } from "../product-list/ProductList";
import Link from "next/link";

export const Recomendation = () => {
  return (
    <div className="w-full flex flex-col md:gap-[40px] gap-[4.8vw] mb-[150px]">
      <Link href={'/'} className="cormorantSC md:w-fit w-full font-bold md:text-[30px] text-[5.87vw] flex items-center md:justify-start justify-between md:gap-[20px] gap-[0px]">
        <h4>Покупают вместе</h4>
        <svg className="md:mr-[0px] mr-[2.67vw] md:w-[8px] md:h-[16px] w-7px h-12px" width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M1 15L6.87352 9.12648C7.40783 8.59217 7.40783 7.72587 6.87352 7.19156L0.999999 1.31804" stroke="#2D2B2D" strokeWidth="1.3682" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <ProductList productList={productList.filter((_, index) => index < 10)} />
    </div>
  );
};