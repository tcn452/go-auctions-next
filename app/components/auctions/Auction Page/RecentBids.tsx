"use client";

import { Bids } from "@/app/types/schema";
import { maskName, numberToPrice } from "@/app/utils/formatter";

interface AuctionBidsProps {
  bids: Bids[];
}

export default function AuctionBids({ bids }: AuctionBidsProps) {
 

  return (
    <section className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-4">Recent Approved Bids</h3>
      {bids.length > 0 ? (
        <ul className="space-y-2">
          {bids.map((bid) => (
            <li
              key={bid.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm"
            >
              <div>
                <p className="font-medium">{maskName(`${bid.user?.first_name} ${bid.user?.last_name}`)}</p>
                <p className="text-sm text-gray-500">{new Date(bid.date_created as string).toLocaleString()}</p>
              </div>
              <p className="font-bold">{numberToPrice({ number: bid.bid_amount as number, currency: "ZAR" })}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No approved bids yet.</p>
      )}
    </section>
  );
}
