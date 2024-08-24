import Google from "next-auth/providers/google";
import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Session } from "next-auth";

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
        async jwt({ token, user }) {
            if (user) {
              token.id = user.id;
            }
      
            return token;
        },
        async session({ session, token: { sub } }): Promise<Session> {
            if (session.user && sub) session.user.id = sub;
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);