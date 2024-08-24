import { SignIn, SignOut } from "./auth/auth-components";
import Image from "next/image";
import { auth } from "@/libs/auth";

export async function LoginHeader() {
  const session = await auth();
  
  return (
    <div className="sticky flex border-b">
      <div className="flex items-center justify-between w-full h-16 px-4 mx-auto sm:px-6">
        <div>
          推しアプリ
        </div>
        <div className="flex items-center">
          <div className="rounded-full">
            <Image
              src = {session?.user?.image ?? ""}
              alt = {session?.user?.name ?? ""}
              width={40}
              height={40}
              className="rounded-full pr-2"
            />
          </div>
          <SignOut />
        </div>
      </div>
    </div>
  );
}

export function WelcomeHader() {
  return (
    <div className="sticky flex border-b">
      <div className="flex items-center justify-between w-full h-16 px-4 mx-auto sm:px-6">
        <div>
          推しアプリ
        </div>
        <SignIn />
      </div>
    </div>
  );
}