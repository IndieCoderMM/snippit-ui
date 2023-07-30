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
  user: {
    id: number;
    name: string;
    bio: string;
    avatar_url: string;
  };
  tags: Tag[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  avatar_url: string;
  bookmarked_snippets: number[];
  starred_snippets: number[];
  shared_snippets: number[];
}

export interface Comment {
  id: number;
  text: string;
  snippet_id: number;
  created_at: string;
  author: {
    id: number;
    name: string;
    avatar_url: string;
  };
}

export interface Tag {
  id: number;
  name: string;
}
