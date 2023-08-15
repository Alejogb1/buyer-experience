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
}

type allCategoriesOutput = RouterOutputs["category"]["all"]

export type Category = allCategoriesOutput[number]
