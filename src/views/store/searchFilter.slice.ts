import { IProduct } from '@/entities/catalog/types/catalog'
import { IFilterItem } from '@/entities/filters/types/filters'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FilterGroup {
  title: string
  filterValue: string
  items: IFilterItem[]
}
interface IBrand {
  photo: string
  brandValue: string
  active: boolean
}

interface IInitialState {
  searchQuery: string
  filters: FilterGroup[]
  brands: IBrand[]
  products: IProduct[]
  totalPages: number
  currentPage: number
  activeCatalogId: number | null
}

const initialState: IInitialState = {
  searchQuery: '',
  filters: [],
  brands: [],
  products: [],
  totalPages: 1,
  currentPage: 1,
  activeCatalogId: null,
}

const searchFilterSlice = createSlice({
  name: 'searchFilterSlice',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setFilters: (state, action: PayloadAction<FilterGroup[]>) => {
      state.filters = [...action.payload]
    },
    toggleFilterItem: (state, action: PayloadAction<{ groupValue: string; itemValue: string }>) => {
      const { groupValue, itemValue } = action.payload

      const group = state.filters.find(f => f.filterValue === groupValue)
      if (!group) return

      const item = group.items.find(i => i.filterItemValue === itemValue)
      if (item) {
        item.active = !item.active
      }
    },
    setBrands: (state, action: PayloadAction<IBrand[]>) => {
      state.brands = [...action.payload]
    },
    toggleBrandItem: (state, action: PayloadAction<string>) => {
      const brand = state.brands.find(b => b.brandValue === action.payload)
      if (brand) {
        brand.active = !brand.active
      }
    },
    resetActiveStates: state => {
      state.filters.forEach(group => {
        group.items.forEach(item => {
          item.active = false
        })
      })

      state.brands.forEach(brand => {
        brand.active = false
      })
      state.searchQuery = ''
    },
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload
    },

    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setActiveCatalogId(state, action: PayloadAction<number>) {
      state.activeCatalogId = action.payload
    },
  },
})

export const {
  setSearchQuery,
  setFilters,
  toggleFilterItem,
  setBrands,
  toggleBrandItem,
  resetActiveStates,
  setProducts,
  setTotalPages,
  setCurrentPage,
  setActiveCatalogId,
} = searchFilterSlice.actions
export const searchFilterReducer = searchFilterSlice.reducer
