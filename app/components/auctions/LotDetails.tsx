"use client"

import { isApprovedBidder } from "@/app/utils/approved";
import { useSession } from "next-auth/react";
import DragAndDropUpload from "../forms/FileUpload";
import Link from "next/link";

// components/LotDetails.tsx
const LotDetails = ({ title, auctionDate, location, description, allowedBidders, id }: any) => {
  const {data : session, status } = useSession()


    return (
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-semibold">Auction Date:</p>
            <p>{new Date(auctionDate).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Location:</p>
            <p>{location}</p>
          </div>
        </div>
        <p className="mt-4" dangerouslySetInnerHTML={{ __html: description }}></p>
        {
          status === "authenticated" && isApprovedBidder(session?.id, allowedBidders) === false && <DragAndDropUpload userId={session.id} lotId={id} />
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
  };
  
  export default LotDetails;
  