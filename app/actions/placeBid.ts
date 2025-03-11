"use server"


export async function placeBid(data: FormData, userId : string, vehicleId: string, refreshToken : string) {
    const bidPrice =parseFloat(data.get("bid_price") as string)
   

    if (isNaN(bidPrice)) {
        return { success: false, message: "Invalid bid data."}
    }

    try {
        console.log(vehicleId, userId,refreshToken)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/Bids`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${refreshToken}`,
            },
            body : JSON.stringify({
                vehicle_id: vehicleId,
                bid_amount: bidPrice,
                user:  userId,
                date_created: new Date().toISOString(),
            })
        })

       

        if (!response) {
         
            
            throw new Error("Failed to place bid.")
        }
        console.log(response)
        return {success: true, message: "Bid placed successfully!"};
    } catch (error) {
        console.error(error)
        return {success: false, message: "Failed to place bid. Please try again."}
    }
}