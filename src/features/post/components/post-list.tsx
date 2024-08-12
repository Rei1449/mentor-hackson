import { Post } from '@/features/post/types/post';

const getPostList = async () => {
  // const res = await fetch('http://localhost:3020/api/post')
  const res = await fetch('http://host.docker.internal:3020/api/post'); // docker環境の場合
  const json = await res.json()
  return json.posts
}

type post = {
  posts: Post[];
}

export default async function PostList() {

  const postList = await getPostList()

  return (
    <>
    <h1>投稿一覧</h1>
    
    {postList.map((post:post) => (
      <div key={post.id}>
        <h2>{post.id} {post.body}</h2>
        <p>{post.created_at}</p>
        <p>{post.userId}</p>
      </div>
    ))}
    </>
  );
}

