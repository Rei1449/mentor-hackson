import { Post } from '@/features/post/types/post';
import { revalidatePath } from "next/cache";
import { auth } from "@/libs/auth";

const getPostList = async () => {
  const res = await fetch('https://mentor-hackson.vercel.app/api/post')
  // const res = await fetch('http://host.docker.internal:3020/api/post'); // ローカル環境の場合
  const json = await res.json()
  return json.posts
}

const addPost = async (formData: FormData) => {
  "use server"

  const session = await auth();
  const userEmail = session?.user?.email;
  if (!userEmail) {
    throw new Error("User not authenticated");
  }
  
  const text: FormDataEntryValue | null = formData.get('text')
  if (!text) return

  const res = await fetch('https://mentor-hackson.vercel.app/api/post', {
  // const res = await fetch('http://host.docker.internal:3020/api/post', { // ローカル環境の場合
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      body: text,
      userEmail: userEmail
    })
  })
  revalidatePath('/')
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

    <form action={addPost}>
      <input type="text" name="text" placeholder="New post..." />
      <button>Add Post</button>
    </form>
    </>
  );
}
