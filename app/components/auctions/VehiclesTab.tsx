// components/VehiclesTab.tsx
"use client";

import { getAssetUrl } from "@/app/lib/directus";
import { formatVehicleCategory } from "@/app/types/VehicleEnum";
import { Vehicles } from "@/app/types/schema";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const VehiclesTab = ({ vehicles }: { vehicles: Vehicles[] }) => {
  const [activeCategory, setActiveCategory] = useState("All");

// Group vehicles by category
const rawCategories = [
    ...new Set(vehicles.map((v) => v.vehicle_category || "Uncategorized")),
  ];
  const categories = rawCategories.map((key) => ({
    key,
    label: key === "Uncategorized" ? "Uncategorized" : formatVehicleCategory(key),
  }));

  const filteredVehicles =
    activeCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.vehicle_category === activeCategory);

  return (
    <section className=" rounded-lg p-6">
        <h3 className="text-3xl my-6 text-center">Catalogue</h3>
      <div className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <button
              className={`px-4 py-2 rounded ${activeCategory === "All" ? "bg-green-500 text-white" : "bg-gray-200"}`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
          </li>
          {categories.map(({key, label}) => (
            <li key={key}>
              <button
                className={`px-4 py-2 rounded ${
                  activeCategory === key ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => setActiveCategory(key)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle) => (
          <Link href={`/auctions/vehicles/${vehicle.id}`} key={vehicle.id} className="shadow-lg bg-white rounded-lg p-4">
            <Image
              src={getAssetUrl(vehicle.auction_cover_image as string)}
              width={600}
              height={600}
              alt={`${vehicle.Year} ${vehicle.Model} `}
              className="w-full object-cover mb-2 rounded"
            />
            <h3 className="font-semibold text-lg">{`${vehicle.Year} ${vehicle.Model} - ${vehicle.model_description} `}</h3>
            <p>Mileage: {vehicle.Mileage} km</p>
            <p>Color: {vehicle.colour}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VehiclesTab;
