import prisma from '@/libs/prismaClient';
import { NextResponse } from 'next/server';

const connect = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("Database connection failed")
  }
}

export const POST = async (req: Request) => {
    const { postId, userId } = await req.json();

    try {
        await connect();
        const post = await prisma.like.create({
            data: {
                postId: postId,
                userId: userId
            }
        });

        return NextResponse.json({ message: "いいね完了"}, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "いいね失敗" }, { status: 500 })

    } finally {
        await prisma.$disconnect();
    }
}
