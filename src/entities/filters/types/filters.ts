export interface IGetFiltersResponse {
  catalog_list: ICatalog[]
}
export interface ICatalog {
  title: string
  catalogValue: string
  brands: IBrand[]
  filters: IFilter[]
}

export interface IBrand {
  photo: string
  brandValue: string
}
export interface IFilter {
  title: string
  filterValue: string
  items: IFilterItem[]
}

export interface IFilterItem {
  name: string
  filterItemValue: string
  active: boolean
}
