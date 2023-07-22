export interface Snippet {
  id: number;
  title: string;
  description: string;
  code: string;
  language: string;
  stars_counter: number;
  comments_counter: number;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export interface Contributor {
  id: number;
  email: string;
  name: string;
  bio: string;
  avatar_url: string;
  admin: boolean;
  code_snippets_counter: number;
  created_at: string;
  updated_at: string;
}