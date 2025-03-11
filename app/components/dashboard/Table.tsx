
"use client"
import Link from "next/link";
import React from "react";
import InteractiveRow from "./InteractiveRow";
import { useSession } from "next-auth/react";
import { deleteBid } from "@/app/actions/deleteBid";

interface TableHeader {
  key: string;
  label: string;
}

interface TableRow {
  [key: string]: any;
}

interface TableProps {
  headers: TableHeader[];
  rows: TableRow[];

}

const getStatusClass = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Ended":
      return "bg-red-100 text-red-800";
    case "Upcoming":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "";
  }
};

const StatusPill: React.FC<{ status: string }> = ({ status }) => {
  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
        status
      )}`}
    >
      {status}
    </span>
  );
};

// Utility function to group bids by vehicle for the current user and return only the highest bid
const getHighestBidsForUser = (bids: any[]) => {
  const grouped = bids.reduce((acc: Record<number, any>, bid) => {
    const vehicleId = bid.vehicle_id.id;
    if (!acc[vehicleId] || parseFloat(bid.bid_amount) > parseFloat(acc[vehicleId].bid_amount)) {
      acc[vehicleId] = bid;
    }
    return acc;
  }, {});
  return Object.values(grouped);
};

// Utility function to group bids by Lots
const groupByLots = (bids: any[]) => {
  const lots = bids.reduce((acc: Record<number, any[]>, bid) => {
    const lotId = bid.vehicle_id.lot;
    if (!acc[lotId]) acc[lotId] = [];
    acc[lotId].push(bid);
    return acc;
  }, {});
  return Object.entries(lots).map(([lot, lotBids]) => ({
    lot: parseInt(lot),
    highestBids: getHighestBidsForUser(lotBids),
  }));
};

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  const groupedLots = groupByLots(rows);
  const {data: session } = useSession()
  console.log(session?.accessToken)
  
  
  return (
    <div>
      {groupedLots.map(({ lot, highestBids }) => (
        <div key={lot} className="mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header.key}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              
              {highestBids.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header) => (
                    <td
                      key={header.key}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {
                      header.key === "status" ? (
                        <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => deleteBid(row.id)}
                      >
                        Delete
                      </button>
                      ) :
                      header.key === "currentBid" ? (
                        <div>R {row.bid_amount.toLocaleString()}</div>
                      ) : header.key === "endDate" ? (
                        <div>
                          {new Date(row.vehicle_id.end_date || row.date_created).toLocaleDateString()}
                        </div>
                      ) : header.key === "name" ? (
                        <Link href={`/auctions/vehicles/${row.vehicle_id.id}`} className="hover:underline hover:text-green-800">
                          {row.vehicle_id.Make} {row.vehicle_id.Model}
                        </Link>
                      ) : (
                        <div>{row[header.key]}</div>
                      )}
                    </td>
                  ))}
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Table;
