"use client";

import React from "react";

interface InteractiveRowProps {
  row: any; // Replace with the correct type for your row
  headers: { key: string; label: string }[];
  
}

const InteractiveRow: React.FC<InteractiveRowProps> = ({ row, headers }) => {

   
    
  return (
    <tr>
      {headers.map((header) => (
        <td key={header.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {header.key === "currentBid" ? (
            <div>R {row.bid_amount.toLocaleString()}</div>
          ) : header.key === "endDate" ? (
            <div>{new Date(row.vehicle_id.end_date || row.date_created).toLocaleDateString()}</div>
          ) : header.key === "name" ? (
            <div>
              {row.vehicle_id.Make} {row.vehicle_id.Model}
            </div>
          ) : (
            <div>{row[header.key]}</div>
          )}
        </td>
      ))}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => deleteBid(row.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default InteractiveRow;
