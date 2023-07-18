export interface Billboard {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  billboard: Billboard;
}
