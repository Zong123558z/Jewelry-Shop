'use client'
import { useGetProductQuery } from '@/entities/catalog/api/catalog.api'
import { Breadcrumbs } from '@/features/breadcrumbs/Breadcrumbs'
import { Container } from '@/shared/container/Container'
import { useAppSelector } from '@/views/store'
import { setCurrentSize, setSizes } from '@/views/store/product.slice'
import { ProductContent } from '@/widgets/product-content/ProductContent'
import { Recomendation } from '@/widgets/recomendation/Recomendation'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Page() {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)
  const dispatch = useDispatch()
  const params = useParams()
  const productId = params.id

  const { data } = useGetProductQuery({ id: +productId })
  useEffect(() => {
    if (data) {
      dispatch(setSizes(data.product.sizes))
      dispatch(setCurrentSize(data.product.sizes[0]))
    }
  }, [data])

  if (isMobileDevice)
    return (
      <div className="pb-[20vw]">
        <ProductContent product={data?.product} />
        <Container>
          <Recomendation recomendations={data?.product.recommendations} />
        </Container>
      </div>
    )

  return (
    <div className="mt-[31px]">
      <Container>
        <Breadcrumbs />
        <ProductContent product={data?.product} />
        <Recomendation recomendations={data?.product.recommendations} />
      </Container>
    </div>
  )
}
