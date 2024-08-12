import prisma from '@/libs/prismaClient';
import { NextResponse } from 'next/server';

export const connect = async () => {
    try {
        prisma.$connect();
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
    return NextResponse.json({ messeage: "Error" },{ status: 500 })

  } finally {
    await prisma.$disconnect();
  }
}
