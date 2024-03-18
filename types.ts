export type FeedSort = "hot" | "controversial" | "new" | "follow" | "top";
export interface User {
  id: string;
  alias: string;
  avatar_url: string | null;
  facebook_id: string | null;
  username: string;
  token: string;
  is_followed?: boolean;
}
export interface UserInfo {
  id: string;
  description: string | null;
  phone_number: string | null;
  address: string | null;
  hometown: string | null;
  email: string;
  dob: string | null;
  id_number: string | null;
  user_id: string;
  wallpaper: string | null;
  gender: null | "male" | "female";
}
export interface UserWithInfo extends User {
  user_info: UserInfo;
}
export interface Comment {
  id: string;
  content: string;
  parent_id: number;
  like: number;
  likes: User[];
  dislikes: User[];
  post_id: string;
  user_id: string;
  childrens?: CommentWithUserInfo[];
  created_at: string;
  updated_at: string;
}
export interface CommentWithUserInfo extends Comment {
  user: User & { user_info: UserInfo };
}
export interface Post {
  id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail: null;
  content: string;
  view: number;
  is_shown: number;
  author_id: string;
  created_at: string;
  updated_at: string;
  author?: User;
  categories: Category[];
  comments_count: number;
  is_saved: boolean;
  point: number;
  user_action: -1 | 0 | 1;
}
export interface Draft {
  id: string;
  name: string;
  description: string;
  content: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  author: User;
}
export interface Tag {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  created_at: string;
  updated_at: string;
}
export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}
export interface CategoryWithTag extends Category {
  tags: Tag[];
}
export interface Series {
  id: string;
  name: string;
  slug: string;
  author_id: string;
  description: null;
  is_shown: 1;
  thumbnail: null;
  posts: Post[];
  created_at: string;
  updated_at: string;
}
export interface PaginatedReponse<T> {
  message: string;
  status: number;
  data: {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: any[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}
