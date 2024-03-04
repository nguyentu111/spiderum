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
  post_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
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
  comments?: Comment[];
}
export interface Tag {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  created_at: string;
  updated_at: string;
}
export interface CategoryWithTag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  tags: Tag[];
}
export interface Serie {
  id: string;
  name: string;
  slug: string;
  author_id: string;
  description: null;
  is_shown: 1;
  thumbnail: null;
  created_at: string;
  updated_at: string;
}
