export type ProductProps = {
  id: number;
  name: string;
  categoryId: number;
  ingredients: string;
  favourite: boolean;
  description: string;
  image: string;
  instructions: string;
  select?: number;
};
