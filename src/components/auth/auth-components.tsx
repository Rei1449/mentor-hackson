import React from "react";
import { signIn, signOut } from "@/libs/auth";

export function SignIn({provider}: { provider?: string }) {
  return (
    <form 
      action={async () => {
        "use server";
        await signIn(provider, {redirectTo : "/dashboard"});
      }}
    >
      <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        SignIn
      </button>
    </form>
  );
}

export function SignOut() {
  return (
    <form 
      action={async () => {
        "use server";
        await signOut({redirectTo : "/"});
      }}
    >
      <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        SignOut
      </button>
    </form>
  );
}
