import { SignIn, SignOut } from "./auth/auth-components";

export function LoginHeader() {
  return (
    <div className="sticky flex border-b">
      <div className="flex items-center justify-between w-full h-16 px-4 mx-auto sm:px-6">
        <div>
          推しアプリ
        </div>
        <SignOut />
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