import { LoginHeader } from "@/components/header";
import { Inter } from "next/font/google";
import { PostList } from '@/features/post/components/post-list';

const inter = Inter({ subsets: ["latin"] });

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div>
      <LoginHeader />
      {children}
      <PostList />
    </div>
  );
}
