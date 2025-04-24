'use client'
import { CategoryMenu } from '@/features/category-menu/CategoryMenu'
import { Collections } from '@/features/collections/Collections'
import { Container } from '@/shared/container/Container'
import { productList } from '@/utils/const/productList'
import { setFilterOpen, useAppDispatch, useAppSelector } from '@/views/store'
import { Filter } from '@/widgets/filter/Filter'
import { ProductList } from '@/widgets/product-list/ProductList'
import { Search } from '@/widgets/search/Search'
import { useEffect } from 'react'

export default function Page() {
  const dispatch = useAppDispatch()
  const { isMobileDevice, filterOpen } = useAppSelector(state => state.main.settings)

  useEffect(() => {
    dispatch(setFilterOpen(false))
  },[])

  if(isMobileDevice) return (
    <div className='mb-[130px]'>
      {!filterOpen && <Collections />}
      <Container className="mt-[15px]">
        {filterOpen
          ? <Filter />
          : (
            <>
              <Search />
              <CategoryMenu />
              <div className="w-full">
                <div className="md:mt-[43px] mt-[4.8vw]">
                  <ProductList productList={productList} />
                </div>
              </div>
            </>
          )
        }
      </Container>
    </div>
  )
    

  return (
    <div className='mb-[150px]'>
      {!filterOpen && isMobileDevice && <Collections />}
      <Container className="mt-[15px]">
      <Search />
      {filterOpen
        ? <Filter />
        : (
          <div className="w-full">
            <Collections />
            <CategoryMenu />
            <div className="md:mt-[43px] mt-[4.8vw]">
              <ProductList productList={productList} />
            </div>
          </div>
        )
      }
      </Container>
    </div>
  )
}
