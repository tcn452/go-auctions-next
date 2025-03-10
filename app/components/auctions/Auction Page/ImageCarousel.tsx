"use client";


import { getAssetUrl } from "@/app/lib/directus";
import Image from "next/image";
import { useState } from "react";

interface AuctionGalleryProps {
  gallery: Array<{ directus_files_id: string }>;
}

export default function AuctionGallery({ gallery }: AuctionGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="carousel">
        <Image
          src={getAssetUrl(gallery[currentIndex]?.directus_files_id as string)}
          alt={`Slide ${currentIndex + 1}`}
          width={800}
          height={800}
          className="object-cover w-full h-[35rem]"
        />
      </div>
      <div className="carousel-controls absolute bottom-0 flex justify-between items-center w-full">
        <button className="bg-green-800 text-white px-3 py-1" onClick={handlePrev}>
          &lt;
        </button>
        <button className="bg-green-800 text-white px-3 py-1" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="thumbnails flex justify-center gap-2 mt-2">
        {gallery.map((image, index) => (
          <Image
            key={index}
            src={getAssetUrl(image.directus_files_id)}
            alt={`Thumbnail ${index + 1}`}
            width={80}
            height={64}
            className={`w-20 h-16 object-cover cursor-pointer ${
              currentIndex === index ? "border-2 border-black rounded-md" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
