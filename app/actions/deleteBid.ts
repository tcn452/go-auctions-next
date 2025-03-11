"use server"

import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"

export const deleteBid = async (bidId: number) => {
    const session = await getServerSession(options)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/Bids/${bidId}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                Authorization : `Bearer ${session.accessToken}`,
                "Content-Type" : "application/json",
            }
        })

        if (!response.ok) {
            console.log(response)
            throw new Error("Failed to delete the bid")
        }

        

    } catch (error) {
        console.error(error)
        
    }
}