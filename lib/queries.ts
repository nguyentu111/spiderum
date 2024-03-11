import axios from "axios";
import { axiosCient, fetcher } from "./fetcher";
import { feedsortVals } from "@/constants/feed";
import { PaginatedReponse, Post, Series } from "@/types";
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
  const rs = await fetcher(`/categories`, { next: { revalidate: 0 } });
  return await rs.json();
};
export const getSeries = async (username?: string) => {
  const rs = await axiosCient.get(`/series?username=${username}`);
  return rs.data.data as Series[];
};
export const getPostData = async (slug: string) => {
  const rs = await axiosCient.get(`/posts/${slug}`);
  return rs.data;
};
export const getSingleSeries = async (slug: string) => {
  const rs = await fetcher(`/series/${slug}`, {
    next: { tags: ["series", slug], revalidate: 0 },
  });
  return rs;
};
export const addSeries = async ({
  data,
  token,
}: {
  data: {
    name: string;
    description?: string;
    posts?: string[];
  };
  token?: string;
}): Promise<any> => {
  const rs = await axiosCient.post(`/series`, data, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  return rs.data;
};
export const updateSeries = async ({
  slug,
  data,
  token,
}: {
  slug: string;
  data: {
    name: string;
    description?: string;
    posts?: string[];
  };
  token?: string;
}): Promise<any> => {
  const rs = await axiosCient.post(`/series/${slug}`, data, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  return rs;
};
export const addNewPost = async ({
  data,
  token,
}: {
  data: any;
  token?: string;
}): Promise<any> => {
  const rs = await axiosCient.post(
    `/posts`,
    { ...data },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};
export const addComment = async ({
  data,
  token,
}: {
  data: {
    post_id: string;
    content: string;
    parent_id?: string;
  };
  token?: string;
}) => {
  const rs = await axiosCient.post(
    `/comments`,
    { ...data },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};

export const getComment = async ({
  data: { order, post_id },
  token,
  page,
}: {
  data: {
    post_id: string;
    order: "latest" | "hottest";
  };
  token?: string;
  page: number;
}) => {
  const rs = await axiosCient.get(
    `/comments?post_id=${post_id}&order=${order}&page=${page}`,
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};
export const deleteComment = async ({
  comment_id,
  token,
}: {
  comment_id: string;
  token?: string;
}) => {
  const rs = await axiosCient.delete(`/comments/${comment_id}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  return rs.data;
};
export const voteComment = async ({
  comment_id,
  action,
  token,
}: {
  action: 0 | 1 | 2 | 3;
  comment_id: string;
  token?: string;
}) => {
  const rs = await axiosCient.post(
    `/comments/vote/${comment_id}`,
    { action },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};
export const votePost = async ({
  slug,
  token,
  action,
}: {
  slug: string;
  token?: string;
  action: 0 | 1 | 2;
}) => {
  const rs = await axiosCient.patch(
    `/posts/vote/${slug}`,
    { action },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};
export const getUserPosts = async ({
  username,
  series,
}: {
  username: string;
  series?: string;
}) => {
  const rs = await fetcher(
    `/posts?username=${username}${series ? `&series=${series}` : ""}`,
    { next: { tags: ["posts", "username"] } }
  );
  return rs;
};
export const getUser = async (usernameOrId: string) => {
  const rs = await fetcher(`/users/${usernameOrId}`);
  return rs;
};
export const savePost = async ({
  slug,
  token,
  action,
}: {
  slug: string;
  token: string;
  action: 0 | 1;
}) => {
  const rs = await axiosCient.post(
    `/save-posts/${slug}`,
    {
      action,
    },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs;
};
export const getSavedPosts = async (token: string) => {
  const rs = await fetcher(`/save-posts`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    next: { revalidate: 0 },
  });
  return rs;
};
