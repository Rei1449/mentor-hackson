import PostList from '@/features/post/components/post-list';
import { WelcomeHader } from "@/components/header"

export default function Home() {
  return (
    <>
      <WelcomeHader />
      <div>テスト</div>
      <PostList />
    </>
  );
}
