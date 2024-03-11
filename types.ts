export interface User {
  id: string;
  alias: string | null;
  avatar_url: string | null;
  facebook_id: string | null;
  username: string;
  token: string;
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
  thumbnail: null;
  content: string;
  like: number;
  view: number;
  is_shown: number;
  author_id: string;
  created_at: string;
  updated_at: string;
  author?: User;
  comments?: CommentWithUserInfo[];
  categories: Category[];
  likes: User[];
  dislikes: User[];
  comments_count: number;
  is_saved: boolean;
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
