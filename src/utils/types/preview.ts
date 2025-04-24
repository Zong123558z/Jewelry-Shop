export interface IPreview {
  id: number;
  image: string;
  title: string;
  description: string;
  catalogs: {
    name: string;
    image: string;
  }[];
}