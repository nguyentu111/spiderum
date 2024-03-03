import { fetcher } from "./fetcher";
import { feedsortVals } from "@/constants/feed";
export const getNewFeed = async ({
  page,
  per_page,
  sort,
}: {
  sort: string;
  per_page: number;
  page: number;
}) => {
  const rs = await fetcher(
    `/new-feed?sort=${sort}&per_page=${per_page}&page=${page}`
  );
  return await rs.json();
};
export const getTopView = async () => {
  const rs = await fetcher(`/top-view`);
  return await rs.json();
};
export const getCategories = async () => {
  const rs = await fetcher(`/categories`, {}, false);
  return await rs.json();
};
export const getSeries = async (token: string) => {
  const rs = await fetcher(
    `/series`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    false
  );
  return await rs.json();
};
