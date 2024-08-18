import prisma from '@/libs/prismaClient';
import { NextResponse } from 'next/server';

const connect = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("Database connection failed")
  }
}

export const GET = async (req: Request) => {
  try {
    await connect();
    const posts = await prisma.post.findMany();

    return NextResponse.json({posts},{ status: 200 })

  } catch (error) {
    return NextResponse.json({ message: "Error" },{ status: 500 })

  } finally {
    await prisma.$disconnect();
  }
}

export const POST = async (req: Request) => {
  const { body, userEmail } = await req.json();
  try {
    await connect();

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "ユーザーが見つかりません" }, { status: 404 });
    }
    
    const post = await prisma.post.create({
      data: {
        body: body,
        point: 100,
        userId: user.id
      }
    });
    return NextResponse.json({ message: "投稿完了"}, { status: 200 })
  } catch (error) {
      return NextResponse.json({ message: "投稿失敗" }, { status: 500 })
  } finally {
      await prisma.$disconnect();
  }
}
