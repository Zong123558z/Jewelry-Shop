'use client'
import { useGetProductsQuery } from '@/entities/catalog/api/catalog.api'
import { CategoryMenu } from '@/features/category-menu/CategoryMenu'
import { Collections } from '@/features/collections/Collections'
import { Container } from '@/shared/container/Container'
import { setFilterOpen, useAppDispatch, useAppSelector } from '@/views/store'

import { setProducts, setTotalPages } from '@/views/store/searchFilter.slice'
import { RootState } from '@/views/store/store'
import { Filter } from '@/widgets/filter/Filter'
import { ProductList } from '@/widgets/product-list/ProductList'
import { Search } from '@/widgets/search/Search'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from 'react-use'
export default function Page() {
  const dispatch = useAppDispatch()
  const filters = useSelector((state: RootState) => state.searchFilter.filters)
  const brands = useSelector((state: RootState) => state.searchFilter.brands)
  const products = useSelector((state: RootState) => state.searchFilter.products)
  const searchQuery = useSelector((state: RootState) => state.searchFilter.searchQuery)
  const currentPage = useSelector((state: RootState) => state.searchFilter.currentPage)
  const activeCatalogId = useSelector((state: RootState) => state.searchFilter.activeCatalogId)

  const activeBrandIds = brands.filter(b => b.active).map(b => +b.brandValue)
  const activeStoneIds = filters[0]?.items.filter(i => i.active).map(i => +i.filterItemValue) ?? []
  const [currentSearchQuery, setCurrentSearchQuery] = useState('')

  // Состояние для debounce
  const [debouncedBrandIds, setDebouncedBrandIds] = useState<number[]>(activeBrandIds)
  const [debouncedStoneIds, setDebouncedStoneIds] = useState<number[]>(activeStoneIds)

  // Делаем debounce через хук
  useDebounce(
    () => {
      setDebouncedBrandIds(activeBrandIds)
      setDebouncedStoneIds(activeStoneIds)
      setCurrentSearchQuery(searchQuery)
    },
    500,
    [activeBrandIds, activeStoneIds, searchQuery]
  )

  // Используем в запросе
  const { data, isLoading, error } = useGetProductsQuery({
    page: currentPage,
    limit: 4,
    brandIds: debouncedBrandIds,
    stoneIds: debouncedStoneIds,
    productTypeId: activeCatalogId,
    q: currentSearchQuery,
  })
  const { isMobileDevice, filterOpen } = useAppSelector(state => state.main.settings)
  useEffect(() => {
    dispatch(setFilterOpen(false))
  }, [])

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data.products))
      dispatch(setTotalPages(data.totalPages))
    }
  }, [data])

  if (isMobileDevice)
    return (
      <div className="mb-[130px]">
        {!filterOpen && <Collections />}
        <Container className="mt-[15px]">
          {filterOpen ? (
            <Filter />
          ) : (
            <>
              <Search />
              <CategoryMenu />
              <div className="w-full">
                <div className="md:mt-[43px] mt-[4.8vw]">
                  {data?.products && <ProductList productList={data?.products} />}
                </div>
              </div>
            </>
          )}
        </Container>
      </div>
    )

  return (
    <div className="mb-[150px]">
      {!filterOpen && isMobileDevice && <Collections />}
      <Container className="mt-[15px]">
        <Search />
        {filterOpen ? (
          <Filter />
        ) : (
          <div className="w-full">
            <Collections />
            <CategoryMenu />
            <div className="md:mt-[43px] mt-[4.8vw]">{products && <ProductList productList={products} />}</div>
          </div>
        )}
      </Container>
    </div>
  )
}
