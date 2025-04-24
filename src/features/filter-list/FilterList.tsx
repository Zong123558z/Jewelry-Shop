'use client'
import { FilterItem } from "@/shared/filter-item/FilterItem";

const filterList = [
  {
    title: 'Металлы',
    value: 'title 1',
    items: [
      {name: 'Металлы 1', value: 'value 1'},
      {name: 'Металлы 2', value: 'value 2'},
      {name: 'Металлы 3', value: 'value 3'},
      {name: 'Металлы 4', value: 'value 4'},
    ]
  },
  {
    title: 'Вставка',
    value: 'title 2',
    items: [
      {name: 'Вставка 1', value: 'value 1'},
      {name: 'Вставка 2', value: 'value 2'},
    ]
  },
  {
    title: 'Категория',
    value: 'title 3',
    items: [
      {name: 'Категория 1', value: 'value 1'},
      {name: 'Категория 2', value: 'value 2'},
    ]
  },
  {
    title: 'Категория',
    value: 'title 4',
    items: [
      {name: 'Категория 1', value: 'value 1'},
      {name: 'Категория 2', value: 'value 2'},
      {name: 'Категория 3', value: 'value 3'},
      {name: 'Категория 4', value: 'value 4'},
      {name: 'Категория 5', value: 'value 5'},
    ]
  },
]

export const FilterList = () => {
  return (
    <>
      {filterList.map((filterItem, index) => (
        <FilterItem key={index} {...filterItem}/>
      ))}
    </>
  );
};