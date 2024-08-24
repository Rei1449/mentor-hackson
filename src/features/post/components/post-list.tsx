import { Post } from '@/features/post/types/post';
import { getPostList, addPost } from '@/features/post/api/post-api';
import Like from '@/features/like/components/like';
import { auth } from '@/libs/auth';

export async function PostList() {

  const postList = await getPostList() || [];
  const session = await auth();

  console.log(session);

  if (postList.length === 0) {
    return (
      <>
      <h1>投稿一覧</h1>
      <p>投稿がありません。</p>

      <form action={addPost}>
      <input type="text" name="text" placeholder="New post..." />
      <button>Add Post</button>
      </form>
      </>
    );
  }

  return (
    <>
    <h1>投稿一覧</h1>
    
    {postList.map((post: Post) => (
      <div key={post.id}>
        <h2>{post.id} {post.body}</h2>
        <p>{post.point}点</p>
        <p>{post.createdAt}</p>
        <p>{post.userId}</p>
        <Like likes={post.likes} userId={session?.user?.id} postId={post.id}></Like>
      </div>
    ))}

    <form action={addPost}>
      <input type="text" name="text" placeholder="New post..." />
      <button>Add Post</button>
    </form>
    </>
  );
}
