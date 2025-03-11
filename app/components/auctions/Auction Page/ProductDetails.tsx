"use client";

import { placeBid } from "@/app/actions/placeBid";
import { securedClient } from "@/app/lib/directus";
import { Lots, ProofOfPayments, Vehicles } from "@/app/types/schema";
import { isApprovedBidder, isPendingBidder } from "@/app/utils/approved";
import { numberToPrice, getAuctionStatus } from "@/app/utils/formatter";
import { createItem, refresh } from "@directus/sdk";
import {  useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DragAndDropUpload from "../../forms/FileUpload";
import Link from "next/link";

interface AuctionDetailsProps {
  auction: Lots;
  vehicle: Vehicles;
  minimumBid: number;
  allowedBidders : ProofOfPayments[]
}

interface BidFormValues {
  bid : number;
}

export default function AuctionDetails({ auction, vehicle, minimumBid, allowedBidders }: AuctionDetailsProps) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const auctionStatus = getAuctionStatus(new Date(auction.auction_start as string), new Date(auction.auction_end as string));

  const {data: session, status, update } = useSession()
  const sortedBids = vehicle.bids.sort((a, b) => b.bid_amount - a.bid_amount);


 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  

    const formData = new FormData(e.currentTarget);
    const response = await placeBid(formData, session?.id, vehicle.id as unknown as string, session?.accessToken )

    if (response.success) {
      setStatusMessage(response.message)
      e.currentTarget.reset()
    } else {
      setStatusMessage(response.message)
    }
  }

  return (
    <section className="bg-white col-span-2 p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{auction.name}</h2>
      <p dangerouslySetInnerHTML={{__html: auction.description as string}} className="text-gray-700 mb-4"></p>
      <p className="text-lg font-semibold">
        Current Bid: R {numberToPrice({ number: sortedBids[0].bid_amount , currency: "ZAR" })}
      </p>
      <p className="text-lg font-semibold">Bid Increment: R {numberToPrice({ number: vehicle.increment as number })}</p>
      <p className="text-gray-600">Ends on: {new Date(auction.auction_end as string).toLocaleString()}</p>
      <p className={`text-lg font-semibold ${auctionStatus === "Active" ? "text-green-600" : "text-red-600"}`}>
        Status: {auctionStatus}
      </p>
      {
        status === "authenticated" && isApprovedBidder(session?.id, allowedBidders) &&  <div className="mt-4">
        <form onSubmit={handleSubmit} className="mt-4">
          <input type="hidden" name="auction_id" value={vehicle.id} />
          <div className="relative mb-4">
            <span className="absolute left-0 pl-3 flex items-center text-gray-500">R</span>
            <input
              type="number"
              name="bid_price"
              step={vehicle.increment as number}
              min={sortedBids[0].bid_amount}
              defaultValue={sortedBids[0].bid_amount}
              className="border rounded p-2 pl-8 w-full"
              placeholder={`Enter minimum bid: R${minimumBid}`}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-800 text-white px-4 py-2 rounded w-full hover:bg-green-700"
          >
            Place Bid
          </button>
        </form>
        {statusMessage && (
          <p
            className={`mt-4 text-sm ${
              statusMessage.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </p>
        )}
        </div>
      }
       {
          status === "authenticated" && !isApprovedBidder(session?.id, allowedBidders) &&!isPendingBidder(session?.id, allowedBidders) && <DragAndDropUpload userId={session.id} lotId={id} />
        }
        {
        status === "authenticated" && isPendingBidder(session?.id, allowedBidders) && (
          <div className="bg-green-800 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto mt-8">
            <p className="text-center text-lg font-semibold">We are processing your proof of payment.</p>
            <p className="text-center mt-2 text-sm">Please be patient while we verify your payment.</p>
          </div>
        )
      }
      {
        status === "unauthenticated" && (
      <div className="mt-6 flex justify-center">
         <div className="mt-6 flex justify-center">
        <Link 
          href="/login"
          className="px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 transform"
        >
          Please Log In or Register to participate in the auction
        </Link>
      </div>
      </div>
    )
  }
    
    </section>
  );
}
