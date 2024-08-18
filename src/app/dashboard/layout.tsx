import { LoginHeader } from "@/components/header";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div>
      <LoginHeader />
      <Link href="/dashboard/post">
        投稿一覧
      </Link>
      {children}
    </div>
  );
}
