'use client'
import { IProduct } from "@/entities/product/types/product";
import { ProductItem } from "@/features/product-item/ProductItem";
import { Pagination } from "@/shared/pagination/Pagination";

interface IProps {
  productList: IProduct[]
}

export const ProductList = ({productList}: IProps) => {
  return (
    <div className="">
      <ul className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[20px] gap-[2.4vw_4.8vw]">
        {productList.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
      <Pagination totalPage={100} className="md:mt-[56px] mt-[10vw]"/>
    </div>
  );
};