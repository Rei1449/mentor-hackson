import { LoginHeader } from "@/components/header";
import { Inter } from "next/font/google";

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
    </div>
  );
}
