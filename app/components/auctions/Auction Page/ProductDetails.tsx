"use client";

import { Lots, Vehicles } from "@/app/types/schema";
import { numberToPrice, getAuctionStatus } from "@/app/utils/formatter";

interface AuctionDetailsProps {
  auction: Lots;
  vehicle: Vehicles;
  minimumBid: number;
}

export default function AuctionDetails({ auction, vehicle, minimumBid }: AuctionDetailsProps) {
  const auctionStatus = getAuctionStatus(new Date(auction.auction_start as string), new Date(auction.auction_end as string));

  return (
    <section className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{auction.name}</h2>
      <p className="text-gray-700 mb-4">{auction.description}</p>
      <p className="text-lg font-semibold">
        Current Bid: {numberToPrice({ number: vehicle.current_highest_bid , currency: "ZAR" })}
      </p>
      <p className="text-lg font-semibold">Bid Increment: {numberToPrice({ number: vehicle.increment as number })}</p>
      <p className="text-gray-600">Ends on: {new Date(auction.auction_end as string).toLocaleString()}</p>
      <p className={`text-lg font-semibold ${auctionStatus === "Active" ? "text-green-600" : "text-red-600"}`}>
        Status: {auctionStatus}
      </p>
      <div className="mt-4">
        <form method="POST" action={`/auction/${vehicle.id}/bid`}>
          <div className="relative mb-4">
            <span className="absolute left-0 pl-3 flex items-center text-gray-500">R</span>
            <input
              type="number"
              name="bid"
              step={vehicle.increment as number}
              value={vehicle.current_highest_bid}
              min={minimumBid}
              className="border rounded p-2 pl-8 w-full"
              placeholder={`Enter minimum bid: R${minimumBid}`}
            />
          </div>
          <button type="submit" className="bg-green-800 text-white px-4 py-2 rounded w-full hover:bg-green-700">
            Place Bid
          </button>
        </form>
      </div>
    </section>
  );
}
