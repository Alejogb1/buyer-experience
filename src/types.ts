import { ReactNode } from 'react';
import { z } from "zod";
import { RouterOutputs } from "./utils/api";

export interface LayoutProps {
  children?: ReactNode
}
export interface CategoriesListProps {
  category?: string | undefined
}
export interface MyFormValues {
  nombre: string;
  email: string;
  categoria: string;
  review: string
  id: Number
}
export interface NameToSlugLinkProps {
  text: string;
  name: string;
}

export type SlugType = {
  slug: Array<string>
}


type allCategoriesOutput = RouterOutputs["category"]["all"]

type allProductsOutput = RouterOutputs["product"]["all"]

export type Category = allCategoriesOutput[number]

export type Product = allProductsOutput[number]