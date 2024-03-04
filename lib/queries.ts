import axios from "axios";
import { axiosCient, fetcher } from "./fetcher";
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
export const getSeries = async (token?: string) => {
  const rs = await axiosCient.get(`/series`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return rs.data;
};
export const addSerie = async ({
  name,
  token,
}: {
  name: string;
  token?: string;
}): Promise<any> => {
  const rs = await axiosCient.post(
    `/series`,
    { name },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};
export const addNewPost = async (data: any, token: string) => {
  const rs = await axiosCient.post(
    `/series`,
    { ...data },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};
