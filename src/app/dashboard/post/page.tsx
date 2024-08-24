import { PostList } from '@/features/post/components/post-list';
import { auth } from '@/libs/auth';
export default async function DashBoard(){
  const session = await auth();

  return(
      <>
        <PostList />
      </>
  )
}
