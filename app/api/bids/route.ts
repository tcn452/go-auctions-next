/* eslint-disable @typescript-eslint/no-unused-vars */
import { subscription } from "@/app/lib/directus"



export async function GET(req: Request) {
   
        try {
            await subscription.connect()

            const { subscription: event } = await subscription.subscribe('Bids', {
                event: 'create', 
                query: {
                    fields: ['bid_amount', 'user', 'date_created']
                }
            })

            for await (const item of event) {
                console.log(item)
            }

            return Response.json({ message : "Account Created!"}, { status : 201})

        } catch (error) {
            console.log(error)
        }
    
}