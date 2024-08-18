import Google from "next-auth/providers/google";
import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const config: NextAuthConfig = {
    theme: {
        logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    },
    adapter: PrismaAdapter(prisma),
    providers: [Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    basePath: "/api/auth", // APIのパスを指定する
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);