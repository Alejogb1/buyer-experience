import { ReactNode } from 'react';
import { z } from "zod";
import { RouterOutputs } from "./utils/api";

export interface LayoutProps {
    children?: ReactNode
}
export interface CategoriesListProps {
    category?: string | undefined
}

type allCategoriesOutput = RouterOutputs["category"]["all"]

export type Category = allCategoriesOutput[number]
