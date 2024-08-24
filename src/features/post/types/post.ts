import { Like } from "@/features/like/types/like";

export type Post = {
  id: number
  body: string
  point: string | number
  createdAt: string
  userId: string
  likes: Like[]
};
