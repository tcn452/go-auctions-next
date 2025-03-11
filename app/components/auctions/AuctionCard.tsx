import Image from 'next/image';

import Link from 'next/link';

interface Props {
  id: string;
  title: string;
  src: string;
  views: number;
  auctionStart: string;
  auctionEnd: string;
  location: string;
  vehiclesCount: number;
}

const LotCard = ({
  id,
  title,
  src,
  views,
  auctionStart,
  auctionEnd,
  location,
  vehiclesCount
}: Props) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg flex flex-col">
      <Link href={`/auctions/lots/${id}`} className="block">
        <Image
          src={src}
          width={400}
          height={225}
          alt={title}
          className="w-full h-[225px] object-cover scale-100 hover:scale-105 hover:rotate-1 duration-300"
        />
      </Link>
      <div className="p-4 space-y-2 flex-grow">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Auction Start: {auctionStart}</span>
            <span className="text-sm text-muted-foreground">Auction End: {auctionEnd}</span>
            <span className="text-sm text-muted-foreground capitalize">Location: {location}</span>
          </div>
          <span className="text-primary font-medium">{vehiclesCount} Vehicles</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <span>{views} views</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
            <span>{vehiclesCount} vehicles</span>
          </div>
        </div>
      </div>
      <div className="p-4 pt-0 space-x-2 flex justify-between">
        <Link href={`/auctions/lots/${id}`} className="inline-block bg-green-800 text-white py-1 px-2 rounded hover:bg-blue-600 transition">
          View Lot
        </Link>
      </div>
    </div>
  );
};

export default LotCard;
