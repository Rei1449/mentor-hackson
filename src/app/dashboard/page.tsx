import { auth } from "@/libs/auth";

export default async function DashBoard(){
    const session = await auth();

    return(
        <>
            <div>
                login!
            </div>
        </>
    )
}