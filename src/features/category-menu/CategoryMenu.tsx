'use client'
import { useGetFiltersQuery } from '@/entities/filters/api/filters.api'
import { SelectMenu } from '@/shared/select-menu/SelectMenu'
import { setActiveCatalogId, setBrands, setFilters } from '@/views/store/searchFilter.slice'
import { RootState } from '@/views/store/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const catalogList = [
  { title: 'Серьги', value: 'earrings' },
  { title: 'Кольца', value: 'rings' },
  { title: 'Колье', value: 'necklace' },
  { title: 'Браслеты', value: 'bracelets' },
]
const filterList = [
  {
    title: 'Металлы',
    value: 'title 1',
    items: [
      { name: 'Металлы 1', value: 'value 1', active: false },
      { name: 'Металлы 2', value: 'value 2', active: false },
      { name: 'Металлы 3', value: 'value 3', active: false },
      { name: 'Металлы 4', value: 'value 4', active: false },
    ],
  },
  {
    title: 'Вставка',
    value: 'title 2',
    items: [
      { name: 'Вставка 1', value: 'value 1', active: false },
      { name: 'Вставка 2', value: 'value 2', active: false },
    ],
  },
  {
    title: 'Категория',
    value: 'title 3',
    items: [
      { name: 'Категория 1', value: 'value 1', active: false },
      { name: 'Категория 2', value: 'value 2', active: false },
    ],
  },
  {
    title: 'Категория',
    value: 'title 4',
    items: [
      { name: 'Категория 1', value: 'value 1', active: false },
      { name: 'Категория 2', value: 'value 2', active: false },
      { name: 'Категория 3', value: 'value 3', active: false },
      { name: 'Категория 4', value: 'value 4', active: false },
      { name: 'Категория 5', value: 'value 5', active: false },
    ],
  },
]

interface IProps {
  className?: string
}

export const CategoryMenu = ({ className }: IProps) => {
  const activeCatalog = useSelector((state: RootState) => state.searchFilter.activeCatalogId)
  const [catalogList, setCatalogList] = useState<{ title: string; value: string }[]>([])

  const dispatch = useDispatch()
  const { data: filters, isLoading, error } = useGetFiltersQuery()

  const handleClick = (catalogId: string) => {
    dispatch(setActiveCatalogId(+catalogId))
    const clickedCategory = filters?.catalog_list.find(catalog => catalog.catalogValue === catalogId)
    const mappedCategory =
      clickedCategory?.filters.map(filter => ({
        ...filter,
        value: filter.filterValue,
      })) ?? []

    const mappedBrands =
      clickedCategory?.brands.map(brand => ({
        ...brand,
        active: false,
      })) ?? []

    dispatch(setFilters([...mappedCategory]))
    dispatch(setBrands([...mappedBrands]))
  }
  const initializeFilters = () => {
    if (filters?.catalog_list) {
      setActiveCatalogId(+filters.catalog_list[0].catalogValue)
      const catalogs = filters.catalog_list.map(catalog => ({
        title: catalog.title,
        value: catalog.catalogValue,
      }))
      setCatalogList(catalogs)

      const initialFilters = filters?.catalog_list[0].filters.map(filter => ({
        ...filter,
        value: filter.filterValue,
      }))
      dispatch(setFilters(initialFilters ?? []))

      const initialBrands = filters?.catalog_list[0].brands.map(brand => ({
        ...brand,
        active: false,
      }))
      dispatch(setBrands(initialBrands ?? []))
    }
  }

  useEffect(() => {
    initializeFilters()
  }, [filters])
  return (
    <div className={`md:mt-[0px] mt-[4.80vw] ${className ? className : ''}`}>
      <SelectMenu
        list={catalogList}
        activeValue={activeCatalog?.toString() || ''}
        handleClick={handleClick}
        className="!p-[0px_3.21vw]"
      />
    </div>
  )
}
