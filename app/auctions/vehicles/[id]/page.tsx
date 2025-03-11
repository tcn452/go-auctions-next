// app/auction/[id]/page.tsx
import AuctionDetails from "@/app/components/auctions/Auction Page/ProductDetails";
import AuctionBids from "@/app/components/auctions/Auction Page/RecentBids";
import AuctionGallery from "@/app/components/auctions/Auction Page/ImageCarousel";

import { directus } from "@/app/lib/directus";
import { Lots, ProofOfPayments, Vehicles } from "@/app/types/schema";
import { readItem } from "@directus/sdk";
interface AuctionPageProps {
  params: Promise<{ id: string }>;
}

export default async function AuctionPage({ params }: AuctionPageProps) {
  const auctionId = await params.id;

//   const auction: Auction = await directus.items("auction").readOne(auctionId, {
//     fields: ["*.*", "product_on_auction.gallery.*"],
//   });

//   const product: Product = await client.items("product").readOne(auction.product_on_auction?.id, {
//     fields: ["*.*"],
//   });

const Product = await directus.request(readItem("Vehicles", auctionId, {
    fields: [
        "*", "lot.*", "lot.allowed_bidders.*" ,"auction_images.*", "bids.*", "bids.user.*"
    ]
}))


const Auction = Product.lot

console.log(Auction)


  return (
    <main className="max-w-5xl mx-auto p-4">
      {Product.auction_images.length > 0 && <AuctionGallery gallery={Product.auction_images} /> }
      
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <AuctionDetails allowedBidders={Auction?.allowed_bidders as ProofOfPayments[]} auction={Auction as Lots} vehicle={Product as Vehicles} minimumBid={Product.bids[0].bid_amount} />
        <AuctionBids bids={Product.bids} />
      </div>
    </main>
  );
}

  