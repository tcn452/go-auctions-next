"use client"

import { useEffect, useState } from 'react';

import { subscription } from '@/app/lib/directus';
import { maskName, numberToPrice } from '@/app/utils/formatter';

interface Bid {
  id: string;
  bid_amount: number;
  date_created: string;
  user?: {
    first_name: string;
    last_name: string;
  };
}

interface AuctionBidsProps {
  bids: Bid[];
}

export default function AuctionBids({ bids: initialBids }: AuctionBidsProps) {
  const [bids, setBids] = useState<Bid[]>(initialBids);
  
  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        await subscription.connect();
        // Set up the subscription and receive live events
          await subscription.subscribe('Bids', {
          event: 'create',
          query: {
            fields: ['id', 'bid_amount', 'user', 'date_created']
          }
        });
       
 

        

        subscription.onWebSocket('message', (data) => {
          if (data.type == 'subscription' && data.event == 'create') {

            
            setBids(prevBids => {
              const bidExists = prevBids.some(bid => bid.id === data.data[0].id)
              if (!bidExists) {
                const updatedBids = [data.data[0], ...prevBids]
                return updatedBids.sort((a, b) => b.bid_amount - a.bid_amount);
              }
              return prevBids
            })
        }})

        

      
        
        // Clean up the subscription when component unmounts
        return () => {
          
          subscription.disconnect();
        };
      } catch (error) {
        console.log('Connection Error', error);
      }
    };
    
    fetchSubscription();
  }, [bids]);
 
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
              <p className="font-bold">R {numberToPrice({ number: bid.bid_amount as number, currency: "ZAR" })}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No approved bids yet.</p>
      )}
    </section>
  );
}