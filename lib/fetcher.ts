import axios from "axios";

export const axiosCient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_URL}/api`,
});
export const fetcher = async (
  url: string,
  options?: RequestInit,
  revalidate?: number | false
) =>
  await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/api` + url, {
    ...options,
    next: { revalidate: revalidate ?? 0 },
  });
