import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const cutWords = (words: string, num = 20) => {
  const w = words.split(" ");
  if (w.length > num) return w.slice(0, num).join(" ") + "...";
  return words;
};