export interface Billboard {
  id: number;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  billboard: Billboard;
}
