import { Post } from '@/features/post/types/post';
import { getPostList, addPost } from '@/features/post/api/post-api';

export default async function PostList() {

  const postList = await getPostList()

  return (
    <>
    <h1>投稿一覧</h1>
    
    {postList.map((post: Post) => (
      <div key={post.id}>
        <h2>{post.id} {post.body}</h2>
        <p>{post.createdAt}</p>
        <p>{post.userId}</p>
      </div>
    ))}

    <form action={addPost}>
      <input type="text" name="text" placeholder="New post..." />
      <button>Add Post</button>
    </form>
    </>
  );
}
