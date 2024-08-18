import { revalidatePath } from "next/cache";
import { auth } from "@/libs/auth";

export const getPostList = async () => {
  const res = await fetch('https://mentor-hackson.vercel.app/api/post')
  // const res = await fetch('http://host.docker.internal:3020/api/post'); // ローカル環境の場合
  const json = await res.json()
  return json.posts
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
