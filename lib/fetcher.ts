import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_URL}/api`,
});
export const fetcher = async (url: string, options?: RequestInit) =>
  await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/api` + url, {
    ...options,
    next: { revalidate: options?.next?.revalidate ?? 0 },
    headers: {
      Accept: "application/json",
      ...options?.headers,
    },
  });
