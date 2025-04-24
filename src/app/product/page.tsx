'use client'
import { Breadcrumbs } from "@/features/breadcrumbs/Breadcrumbs";
import { Container } from "@/shared/container/Container";
import { useAppSelector } from "@/views/store";
import { ProductContent } from "@/widgets/product-content/ProductContent";
import { Recomendation } from "@/widgets/recomendation/Recomendation";

export default function Page() {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)

  if(isMobileDevice) return (
    <div className="pb-[20vw]">
      <ProductContent />
      <Container>
        <Recomendation />
      </Container>
    </div>
  )

  return (
    <div className="mt-[31px]">
      <Container>
        <Breadcrumbs />
        <ProductContent />
        <Recomendation />
      </Container>
    </div>
  );
};