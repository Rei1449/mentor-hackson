import { PrismaClient } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

//インスタンスを作成
const prisma = new PrismaClient();

// データベースに接続する関数
export const connect = async () => {
    try {
        //prismaでデータベースに接続
        prisma.$connect();
    } catch (error) {
        return Error("DB接続失敗しました")
    }
}

export const GET = async (req: Request, { params }:{params:Params}) => {
    try {
        await connect();
        const likes = await prisma.like.findMany({
            where : {
                postId : Number(params.id)
            }
        });
  
        return NextResponse.json({likes},{ status: 200 })
  
    } catch (error) {
        return NextResponse.json({ messeage: "Error" },{ status: 500 })
  
    } finally {
        //必ず実行する
        await prisma.$disconnect();
    }
  }

export const DELETE = async (req: Request, { params }:{params:Params}) => {
    try {

        const targetId:number = Number(params.id);

        await connect();
        const like = await prisma.like.delete({
            where: { id: targetId }
        });

        return NextResponse.json({ message: "削除成功", like }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ messeage: "削除失敗" }, { status: 500 })

    } finally {
        await prisma.$disconnect();
    }
}