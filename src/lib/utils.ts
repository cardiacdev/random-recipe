import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { SearchParams } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function URLSearchParamsToObj(searchParams: SearchParams) {
  if (!searchParams) return {};

  if (typeof searchParams === "string") {
    return Object.fromEntries(new URLSearchParams(searchParams).entries());
  }

  if (Array.isArray(searchParams)) {
    return Object.fromEntries(searchParams);
  }

  if (searchParams instanceof URLSearchParams) {
    return Object.fromEntries(searchParams.entries());
  }

  return searchParams;
}

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
