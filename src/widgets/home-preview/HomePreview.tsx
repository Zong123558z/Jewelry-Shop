import { HomePreviewItem } from "@/features/home-preview-item/HomePreviewItem";
import { IPreview } from "@/utils/types/preview";

const list: IPreview[] = [
  {
    id: 1,
    image: '/images/home/collection-1.png',
    title: 'Колье',
    description: 'Christian Louboutin x Maison Margiela',
    catalogs: [
      {name: 'catalog name', image: '/images/home/slide-1.png'},
      {name: 'catalog name', image: '/images/home/slide-2.png'},
      {name: 'catalog name', image: '/images/home/slide-3.png'},
      {name: 'catalog name', image: '/images/home/slide-4.png'},
      {name: 'catalog name', image: '/images/home/slide-1.png'},
      {name: 'catalog name', image: '/images/home/slide-2.png'},
      {name: 'catalog name', image: '/images/home/slide-3.png'},
      {name: 'catalog name', image: '/images/home/slide-4.png'},
    ]
  },
  {
    id: 2,
    image: '/images/home/collection-2.png',
    title: 'Колье',
    description: 'Christian Louboutin x Maison Margiela',
    catalogs: [
      {name: 'catalog name', image: '/images/home/slide-1.png'},
      {name: 'catalog name', image: '/images/home/slide-2.png'},
      {name: 'catalog name', image: '/images/home/slide-3.png'},
      {name: 'catalog name', image: '/images/home/slide-4.png'},
      {name: 'catalog name', image: '/images/home/slide-1.png'},
      {name: 'catalog name', image: '/images/home/slide-2.png'},
      {name: 'catalog name', image: '/images/home/slide-3.png'},
      {name: 'catalog name', image: '/images/home/slide-4.png'},
    ]
  },
]

export const HomePreview = () => {
  return (
    <main className="md:mt-[20px] mt-[0px] lg:mb-[191px] mb-[100px]">
      <div className="flex flex-col lg:gap-[60px] md:gap-[40px] gap-[12.03vw]">
        {list.map(item => (
          <HomePreviewItem key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
};