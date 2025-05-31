'use client'
import { IBasketItem } from '@/entities/catalog/types/catalog'
import { formatNumber } from '@/utils/libs/formatNumber'
import { decreaseAmount, increaseAmount, setDeleted } from '@/views/store/basket.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ImageWithSkeleton } from '../image-with-skeleton/ImageWithSkeleton'

interface IProps extends IBasketItem {}

export const BasketItem = (props: IProps) => {
  const { ...product } = props
  const dispatch = useDispatch()

  const setDelete = (isDeleted: boolean) => {
    dispatch(setDeleted({ product, isDeleted }))
  }

  const handleClick = () => {
    if (product.isDeleted) {
      if (product.amount <= 0) {
        handleInc()
      }
      setDelete(false)
    } else {
      setDelete(true)
    }
  }

  const handleDec = () => {
    if (product.amount <= 1) {
      setDelete(true)
    }
    dispatch(decreaseAmount(product.product.id))
  }

  const handleInc = () => {
    dispatch(increaseAmount(product.product.id))
  }
  useEffect(() => {
    if (product.amount === 0) {
      setDelete(true)
    }
  }, [])

  return (
    <li className="w-full flex items-start md:gap-[20px] gap-[3.21vw]">
      <div
        className={`${
          product.isDeleted ? 'pointer-events-none opacity-[0.3]' : ''
        } 2xl:min-w-[164px] lg:min-w-[100px] md:min-w-[200px] min-w-100px relative border border-gray aspect-square overflow-hidden rounded-[15px] flex items-center justify-center`}
      >
        <ImageWithSkeleton
          src={product.product.photos[0].imagePath}
          alt="basket-img"
          width={164}
          height={164}
          className="h-full w-full object-cover object-center"
        />
        {product.size && (
          <div className="md:flex hidden w-[45px] absolute top-[-1px] left-[-1px] z-[10] aspect-square border border-[#B3B3B3] bg-[#FFFFFF4D] backdrop-blur-[6px] items-center justify-center rounded-[15px]">
            <p className="text-purple text-[16px] font-medium">{product.size.name}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col md:gap-[8px] gap-[1.34vw] cormorantSC lg:w-fit w-full">
        <div className="flex justify-between w-full">
          <div
            className={`${
              product.isDeleted ? 'pointer-events-none opacity-[0.3]' : ''
            } flex flex-col gap-[3.3px] 2xl:w-[270px] lg:w-[200px] md:w-[270px] w-165px`}
          >
            <h4 className="font-semibold 2xl:text-[30px] lg:text-[20px] md:text-[30px] text-[4.8vw]">
              {product.product.name}
            </h4>
            <p className="bitter 2xl:text-[16px] lg:text-[13px] md:text-[16px] text-[2.67vw] font-normal text-gray">
              {product.product.description}
            </p>
          </div>
          <button
            onClick={handleClick}
            className="2xl:w-[57px] 2xl:h-[57px] lg:w-[40px] lg:h-[40px] md:w-[57px] md:h-[57px] w-35px h-35px aspect-square rounded-full bg-white flex items-center justify-center transition-all active:scale-95"
          >
            {product.isDeleted ? (
              <svg
                className="2xl:w-[21px] 2xl:h-[21px] lg:w-[17px] lg:h-[17px] md:w-[21px] md:h-[21px] w-11px h-11px"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.3385 10.5092H1.20703" stroke="#6A3D96" strokeWidth="1.64832" strokeLinecap="round" />
                <path d="M10.2715 1.44336V19.5749" stroke="#6A3D96" strokeWidth="1.64832" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                className="2xl:w-[28px] 2xl:h-[28px] lg:w-[21px] lg:h-[21px] md:w-[28px] md:h-[28px] w-15px h-15px"
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4682 25.7971H9.84094C8.75857 25.7794 7.72632 25.3378 6.96597 24.5673C6.20563 23.7968 5.77784 22.7588 5.77453 21.6763L4.41797 5.90515H24.0132L22.6583 21.668C22.65 22.7711 22.2039 23.8258 21.4182 24.6001C20.6324 25.3744 19.5714 25.805 18.4682 25.7971V25.7971Z"
                  stroke="#6A3D96"
                  strokeWidth="1.64832"
                  strokeMiterlimit="10"
                />
                <path
                  d="M10.7773 10.9094V20.7927"
                  stroke="#6A3D96"
                  strokeWidth="1.64832"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M17.5332 10.9094V20.7927"
                  stroke="#6A3D96"
                  strokeWidth="1.64832"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M6.04763 5.90516C5.9968 5.30614 6.06455 4.70297 6.24701 4.13015C6.42947 3.55734 6.72305 3.02611 7.11098 2.56684C7.49891 2.10757 7.97356 1.72929 8.5078 1.45361C9.04204 1.17793 9.62538 1.01026 10.2245 0.960205H18.2106C19.3992 1.0897 20.4896 1.68012 21.2478 2.60467C22.0059 3.52923 22.3713 4.71421 22.2654 5.90516H6.04763Z"
                  stroke="#6A3D96"
                  strokeWidth="1.64832"
                  strokeMiterlimit="10"
                />
                <path
                  d="M1.79297 5.90515H26.5177"
                  stroke="#6A3D96"
                  strokeWidth="1.64832"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${product.isDeleted ? 'pointer-events-none opacity-[0.3]' : ''} flex justify-between`}>
          <p className="font-bold 2xl:text-[33px] lg:text-[26px] md:text-[33px] text-[5.34vw]">
            ₽{formatNumber(product.product.price * product.amount)}
          </p>
          <div className="grid grid-cols-3 md:p-[7.85px_15.3px] p-[0.5vw_2vw] bg-white rounded-[13px] md:w-[123px] w-97px text-center">
            <button onClick={handleDec} className="flex items-center justify-center transition-all active:scale-95">
              <svg
                className="2xl:w-[17px] 2xl:h-[17px] lg:w-[12px] lg:h-[12px] md:w-[17px] md:h-[17px] w-11px h-11px"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.3459 7.68652H1.29688" stroke="#2D2B2D" strokeWidth="1.27718" strokeLinecap="round" />
              </svg>
            </button>
            <p className="font-bold 2xl:text-[26px] lg:text-[19px] md:text-[26px] text-[5.34vw]">{product.amount}</p>
            <button onClick={handleInc} className="flex items-center justify-center transition-all active:scale-95">
              <svg
                className="2xl:w-[17px] 2xl:h-[17px] lg:w-[12px] lg:h-[12px] md:w-[17px] md:h-[17px] w-11px h-11px"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.59 7.68652H1.54102" stroke="#2D2B2D" strokeWidth="1.27718" strokeLinecap="round" />
                <path d="M8.56445 0.661987V14.711" stroke="#2D2B2D" strokeWidth="1.27718" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
