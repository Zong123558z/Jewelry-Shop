'use client'
import { setCurrentPage } from '@/views/store/searchFilter.slice'
import { useDispatch, useSelector } from 'react-redux'

interface IProps {
  className?: string
}

export const Pagination = ({ className }: IProps) => {
  const currentPage = useSelector((state: any) => state.searchFilter.currentPage)
  const totalPage = useSelector((state: any) => state.searchFilter.totalPages)
  const dispatch = useDispatch()

  const handleClick = (value: number) => {
    dispatch(setCurrentPage(value))
  }

  const handlePrevClick = () => {
    if (currentPage === 1) return
    dispatch(setCurrentPage(currentPage - 1))
  }

  const handleNextClick = () => {
    if (currentPage === totalPage) return
    dispatch(setCurrentPage(currentPage + 1))
  }

  const getPageNumbers = () => {
    let pages = []
    if (totalPage <= 8) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage === 3) {
        return [1, 2, 3, 4, '...', totalPage]
      }
      if (currentPage === totalPage - 2) {
        return [1, '...', totalPage - 3, totalPage - 2, totalPage - 1, totalPage]
      }
      if (currentPage <= 3) {
        pages = [1, 2, 3, '...', totalPage]
      } else if (currentPage >= totalPage - 2) {
        pages = [1, '...', totalPage - 2, totalPage - 1, totalPage]
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPage]
      }
    }
    return pages
  }

  return (
    <div className={`w-full flex md:justify-end justify-center select-none ${className ? className : ''}`}>
      <div className="flex items-center md:gap-[16px] gap-[2vw] md:text-[20px] text-[3.8vw] font-semibold text-[#91908F]">
        <button onClick={handlePrevClick} className="transition-all active:scale-95">
          <svg
            className="md:w-[17px] md:h-[18px] w-10px h-11px"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.5L5 9.5"
              stroke="#B3B3B3"
              strokeWidth="1.52991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 9.5L12.0002 16.2692"
              stroke="#B3B3B3"
              strokeWidth="1.52991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {getPageNumbers().map((item, index) => (
          <button
            key={index}
            onClick={() => typeof item === 'number' && handleClick(item)}
            className={`md:w-[28px] w-[5vw] transition-all active:scale-95 ${
              currentPage === item ? 'text-purple' : ''
            } ${item === '...' ? 'text-gray-500' : ''}`}
            disabled={item === '...'}
          >
            <p>{item}</p>
          </button>
        ))}

        <button onClick={handleNextClick} className="transition-all active:scale-95">
          <svg
            className="md:w-[17px] md:h-[18px] w-10px h-11px rotate-180"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.5L5 9.5"
              stroke="#B3B3B3"
              strokeWidth="1.52991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 9.5L12.0002 16.2692"
              stroke="#B3B3B3"
              strokeWidth="1.52991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
