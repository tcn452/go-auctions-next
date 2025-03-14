import LotDetails from "@/app/components/auctions/LotDetails";
import VehiclesTab from "@/app/components/auctions/VehiclesTab";
import { directus } from "@/app/lib/directus";
import { Vehicles } from "@/app/types/schema";

import { readItem } from "@directus/sdk";



const LotPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const {id : lotId} = await params
  
  // Fetch the Lot details including vehicles
  const lot = await directus.request(readItem("Lots", lotId, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    fields: ["*", "vehicles.*", "allowed_bidders.*"],
  }))



  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Lot Details Section */}
        <LotDetails
          title={lot.name}
          auctionDate={lot.auction_start}
          location={lot.auction_type}
          description={lot.description}
          allowedBidders={lot.allowed_bidders}
          id={lot.id}
        />
        {/* Vehicles Tab Section */}
        <VehiclesTab vehicles={lot.vehicles as Vehicles[]} />
      </div>
    </div>
  );
};

export default LotPage;