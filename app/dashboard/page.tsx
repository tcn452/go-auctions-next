
import { Bids } from "../types/schema";
import { directus } from "../lib/directus";
import { readItems } from "@directus/sdk";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { groupHighestBids } from "../utils/formatter";
import Table from "../components/dashboard/Table";


export default async function DashboardPage() {
   
    const session = await getServerSession(options)

    
    
    const bids = await directus.request(readItems("Bids", {
        fields: [
            "*", "vehicle_id.*", "vehicle_id.lot.*"
        ],
        filter : {
            "user": {
                id : {
                    "_eq" : session?.id
                }
            }
        }
    }))

  const highestBids = groupHighestBids(bids as Bids[])
        
  const headers = [
    { key: "name", label: "Item Bidded On" },
    { key: "currentBid", label: "Your Highest Current Bid" },
    { key: "endDate", label: "End Date" },
    { key: "status", label: "Actions" },
    ];
    
    return (
    <div className="container mx-auto my-10 justify-around">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Auctions</h3>
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <Table headers={headers} rows={bids} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}