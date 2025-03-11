import { ProofOfPayments } from "../types/schema";

interface AllowedBidder {
    id: number;
    User: string;
    Lot: number;
    status: string;
  }

  export function isApprovedBidder(userID: string | null, allowedBidders: ProofOfPayments[] | null): boolean {
    if (!userID || !allowedBidders) {
        return false;
    }

    return allowedBidders.some(bidder => bidder.User === userID && bidder.status === "approved");
}


export function isPendingBidder(userID: string | null, allowedBidders: ProofOfPayments[] | null): boolean {
    if (!userID || !allowedBidders) {
        return false;
    }

    return allowedBidders.some(bidder => bidder.User === userID && bidder.status === "pending");
}
