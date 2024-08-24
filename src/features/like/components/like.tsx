'use client';

import React from "react";
import type { Like } from "../types/like";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from "react";
import { AddLike, DeleteLike } from "@/features/like/api/like";

// LikeコンポーネントのProps型
interface LikeProps {
    likes: Like[];
    userId: string | undefined;
    postId: number;
}

const Like: React.FC<LikeProps> = ({ likes, userId, postId }) => {

    const [likesState, setLikesState] = useState(likes);

    // ユーザーが「いいね」をしているかどうかを確認
    const like = likesState.find(like => like.userId === userId);

    return (
        <div
        className={"flex justify-end my-3"}
      >
        {like ? (
            <button onClick={() => DeleteLike(like.id, like.postId, setLikesState)}>
                <AiFillHeart
                    size={24}
                    className="text-red-500 cursor-pointer"
                    color="red"
                />
            </button>
        ) : (
            <button onClick={() => AddLike(userId, postId, setLikesState)}>
                <AiOutlineHeart
                    size={24}
                    className="text-red-500 cursor-pointer"
                />
            </button>
        )}
        <span className="text-red-500">{likesState.length}</span>
      </div>
    );
};

export default Like;