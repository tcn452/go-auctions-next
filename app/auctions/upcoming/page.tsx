
import { readItems } from "@directus/sdk";

import { directus, getAssetUrl } from '@/app/lib/directus';
import { Lots } from '@/app/types/schema';
import LotCard from "@/app/components/auctions/AuctionCard";




const UpcomingLots = async () => {
  // Fetching lots data server-side
  const lots : Lots[] = await directus.request(
    readItems("Lots", {
      fields: ["*"], // Adjust fields as necessary
    })
  );

  return (

      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <section className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Lots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {lots.map((lot) => (
                <LotCard
                  key={lot.id}
                  id={lot.id as unknown as string}
                  title={lot.name as string}
                  src={getAssetUrl(lot.cover_image as string)}
                  auctionStart={lot.auction_start as string}
                  auctionEnd={lot.auction_end as string}
                  location={lot.auction_type as string}
                  vehiclesCount={lot.vehicles.length}
                  views={1}
                />
              ))}
            </div>
          </section>
        </main>
      </div>

  );
};

export default UpcomingLots;
