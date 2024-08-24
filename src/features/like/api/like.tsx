import PRISMAURL from "@/develop";


export const AddLike = async function(userId: string | undefined, postId: number, setLikes: Function){
    
    try{
        const res = await fetch(PRISMAURL + '/api/like', { 
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                postId: postId
            })
        })

        const resPost = await fetch(PRISMAURL + `/api/like/${postId}`, { // ローカル環境の場合
            cache: 'no-store' 
        }); 

        if (!resPost.ok) {
            throw new Error("postを取得できませんでした");
        }
        const json = await resPost.json();
        setLikes(json.likes);

    } catch (error) {
        console.error('Failed to add like:', error);

    }
}

export const DeleteLike = async function(id : number, postId: number, setLikes : Function){
    try {
        const res = await fetch(PRISMAURL + `/api/like/${id}`, { 
            method: 'DELETE',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const resPost = await fetch(PRISMAURL + `/api/like/${postId}`, { 
            cache: 'no-store' 
        }); 

        if (!resPost.ok) {
            throw new Error("postを取得できませんでした");
        }
        const json = await resPost.json();
        setLikes(json.likes);

    } catch (error) {
        console.error('Failed to delete like:', error);
    }
}
