import type { Bids } from "../types/directus"; // Adjust the path as needed

interface InumberToPrice {
  number: number;
  currency?: string;
}

// Function to format a number as currency
export const numberToPrice = ({ number, currency = "ZAR" }: InumberToPrice): string => {
  // Format the price with 2 decimal places and add thousand separators
  return number.toLocaleString("en-ZA", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// Function to get the highest bid, with a fallback to the starting price
export function getHighestBid(bids: Bids[], startingPrice: number): number {
  if (bids.length === 0) {
    return startingPrice;
  }
  
  // Assuming 'bid_price' and 'approved' are part of Bids, check for approved bids and get the highest bid
  return bids
    .filter(bid => bid.approved) // Filter only approved bids
    .reduce((max, bid) => (bid.bid_price > max ? bid.bid_price : max), startingPrice);
}

// Function to mask the bidder's name for privacy
export function maskName(bidderName: string): string {
  const nameParts = bidderName.split(' ');

  if (nameParts.length === 2) {
    // Handle first name and last name
    const firstName = nameParts[0];
    const lastName = nameParts[1];

    const maskedFirstName = firstName.slice(0, 2) + '*'.repeat(firstName.length - 2);
    const maskedLastName = '*'.repeat(lastName.length - 3) + lastName.slice(-3);

    return `${maskedFirstName} ${maskedLastName}`;
  } else if (nameParts.length === 1) {
    // Handle single word name
    const name = nameParts[0];
    const maskedFirstName = name.slice(0, 2) + '*'.repeat(name.length - 5);
    const maskedLastName = name.slice(-3);

    return maskedFirstName + maskedLastName;
  } else {
    // Handle cases with more than two parts (unlikely but just in case)
    return nameParts.map((part, index) => {
      if (index === 0) {
        return part.slice(0, 2) + '*'.repeat(part.length - 2);
      } else if (index === nameParts.length - 1) {
        return '*'.repeat(part.length - 3) + part.slice(-3);
      } else {
        return '*'.repeat(part.length);
      }
    }).join(' ');
  }
}

// Function to get the auction status based on start and end dates
export function getAuctionStatus(startDate: Date, endDate: Date): string {
  const currentDate = new Date();

  if (currentDate < startDate) {
    return 'Upcoming';
  } else if (currentDate >= startDate && currentDate <= endDate) {
    return 'Active';
  } else {
    return 'Closed';
  }
}
