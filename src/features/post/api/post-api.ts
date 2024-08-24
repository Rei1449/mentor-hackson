import { revalidatePath } from "next/cache";
import { auth } from "@/libs/auth";
import PRISMAURL, {DOCKERPRISMAURL} from "@/develop";

export const getPostList = async () => {
  try {
    const res = await fetch(DOCKERPRISMAURL + '/api/post', { cache: 'no-store' });
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

  const res = await fetch(DOCKERPRISMAURL + '/api/post', { 
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
