import { revalidatePath } from "next/cache";
import { auth } from "@/libs/auth";

export const getPostList = async () => {
  try {
    const res = await fetch('https://mentor-hackson.vercel.app/api/post', { cache: 'no-store' })
    // const res = await fetch('http://host.docker.internal:3020/api/post', { cache: 'no-store' }); // ローカル環境の場合
    if (!res.ok) {
      throw new Error("postを取得できませんでした");
    }
    const json = await res.json()
    return json.posts
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const addPost = async (formData: FormData) => {
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
    cache: 'no-store',
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
