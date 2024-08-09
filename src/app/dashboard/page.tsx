import { auth } from "@/libs/auth";

export default async function(){
    const session = await auth();

    return(
        <>
            <div>
                login!
            </div>
        </>
    )
}