import { FeedSort, Series } from "@/types";
import { axiosClient, fetcher } from "./fetcher";
export const getNewFeed = async ({
  page,
  per_page,
  sort,
  token,
  category,
}: {
  sort: FeedSort;
  per_page: number;
  page: number;
  token?: string;
  category?: string;
}) => {
  const rs = await fetcher(
    `/new-feed?sort=${sort}&per_page=${per_page}&page=${page}${
      category ? `&category=${category}` : ""
    }`,
    {
      next: { revalidate: 0 },
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return await rs.json();
};
export const getTopView = async (token?: string) => {
  const rs = await fetcher(`/top-view`, {
    next: { revalidate: 0 },
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  return await rs.json();
};
export const getCategories = async () => {
  const rs = await fetcher(`/categories`);
  return await rs.json();
};
export const getNewTopWriter = async (token?: string) => {
  const rs = await fetcher(`/new-top-writer`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  return await rs.json();
};
export const getOldButGoldPost = async (token?: string) => {
  const rs = await fetcher(`/old-but-gold-post`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  return await rs.json();
};
export const getSeries = async (username?: string) => {
  const rs = await axiosClient.get(`/series?username=${username}`);
  return rs.data.data as Series[];
};
export const getPostData = async (slug: string) => {
  const rs = await axiosClient.get(`/posts/${slug}`);
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
  const rs = await axiosClient.post(`/series`, data, {
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
  const rs = await axiosClient.post(`/series/${slug}`, data, {
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
  const rs = await axiosClient.post(
    `/posts`,
    { ...data },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};
export const addNewOrUpdateDraft = async ({
  data,
  token,
}: {
  data: {
    thumbnail: string;
    description: string;
    name: string;
    content: string;
    id?: string;
  };
  token?: string;
}): Promise<any> => {
  const rs = await axiosClient.post(
    `/drafts`,
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
  const rs = await axiosClient.post(
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
  const rs = await axiosClient.get(
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
  const rs = await axiosClient.delete(`/comments/${comment_id}`, {
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
  const rs = await axiosClient.post(
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
  const rs = await axiosClient.patch(
    `/posts/vote/${slug}`,
    { action },
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs.data;
};
export const getPosts = async ({
  username,
  series,
  token,
  category,
  except_cat,
  random,
}: {
  username?: string;
  series?: string;
  category?: string;
  token?: string;
  except_cat?: string;
  random?: boolean;
}) => {
  const rs = await fetcher(
    `/posts?${username ? `username=${username}` : ""}${
      series ? `&series=${series}` : ""
    }${category ? `&category=${category}` : ""}${
      random ? `&random=true}` : ""
    }${except_cat ? `&except_cat=${except_cat}` : ""}`,
    {
      next: { revalidate: 0 },
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
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
}: {
  slug: string;
  token: string;
}) => {
  const rs = await axiosClient.post(
    `/posts/save/${slug}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs;
};
export const unsavePost = async ({
  slug,
  token,
}: {
  slug: string;
  token: string;
}) => {
  const rs = await axiosClient.post(
    `/posts/unsave/${slug}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    }
  );
  return rs;
};
export const getSavedPosts = async (token: string) => {
  const rs = await axiosClient.get(`/saved-posts`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  return rs.data?.data;
};
export const getSavedPostsServer = async (token: string) => {
  const rs = await fetcher(`/saved-posts`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    next: { revalidate: 0 },
  });
  return rs;
};
export const followWriter = async ({
  data,
  token,
}: {
  token: string;
  data: { target_id: string };
}) => {
  const rs = await axiosClient.post("/follow", data, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
};
export const unfollowWriter = async ({
  data,
  token,
}: {
  token: string;
  data: { target_id: string };
}) => {
  const rs = await axiosClient.post("/unfollow", data, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
};
export const getDraft = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => {
  return fetcher(`/drafts/${id}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
};
export const deleteDraft = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => {
  const rs = await axiosClient.delete(`/drafts/${id}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  return rs;
};
