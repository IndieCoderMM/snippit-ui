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
  author: {
    id: number;
    name: string;
    bio: string;
  };
}
