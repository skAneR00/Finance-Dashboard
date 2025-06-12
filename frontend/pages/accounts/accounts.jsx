"use client"

import { useUser } from "@/frontend/context/UserContext"

export default function Accounts(){
    const { user } = useUser();

    return(
        <section>
            <p>user: {user?.username || "Гость"}</p>
        </section>
    )
}