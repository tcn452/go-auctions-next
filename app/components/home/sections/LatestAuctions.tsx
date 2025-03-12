// app/lots/page.tsx

import { getAssetUrl, directus } from "@/app/lib/directus";
import { Lots } from "@/app/types/schema";
import { readItems } from "@directus/sdk";
import Image from "next/image";



// Fetch lots data
async function fetchLots() {
  const lots = await directus.request(readItems("Lots", {
    fields: ["id", "name", "cover_image", "auction_start", "auction_end", "allowed_bidders", "status", "vehicles"],
    limit: 4,
  }));
  return lots as Lots[];
}




export default async function LatestAuctions() {
  const lots = await fetchLots();
 
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Latest Products
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            You can bid on the latest auction of our vehicles.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {lots.map((item) => (
            <a
              href={`/auctions/lots/${item.id}`}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
              key={item.id}
            >
              <Image
                src={getAssetUrl(item.cover_image)}
                alt={item.name}
                width="400"
                height="438"
                className="w-full h-[438px] object-cover scale-100 hover:scale-105 hover:rotate-1 duration-300"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.auction_start}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <a
          className="h-10 p-4 rounded-md bg-green-800 hover:bg-green-500 text-white flex items-center justify-center text-lg uppercase font-medium"
          href="/upcoming"
        >
          View More
        </a>
      </div>
    </div>
  </section>
  );
}

