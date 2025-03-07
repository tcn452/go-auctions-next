export default async function AuctionPage({ params }: { params: { id: string } }) {
    const auctionId = await params.id;
  
    // Fetch auction data (server-side)
    const auctionResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auction/${auctionId}?fields=*.*,&product_on_auction.gallery.*`);
    const auction = await auctionResponse.json();
  
    const productResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${auction?.product_on_auction?.id}?fields=*.*`);
    const product = await productResponse.json();
  
    const approved = await isApprovedBidder(auction.bidders);
    const auctionStatus = getAuctionStatus(new Date(auction.start_date), new Date(auction.end_date));
    const minimumBid = getHighestBid(auction.bids || [], auction.starting_price) + auction.increment;
  
    return (
      <section className="max-w-5xl mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* Image Carousel */}
            <ImageCarousel images={auction.product_on_auction.gallery} />
  
            {/* Auction Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{auction?.auction_title}</h2>
              <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: auction?.auction_description }} />
              <p className="text-lg font-semibold">Current Bid: {numberToPrice({ number: getHighestBid(auction?.bids, auction?.starting_price), currency: "ZAR" })}</p>
              <p className="text-lg font-semibold">Bid Increment: {numberToPrice({ number: auction?.increment })}</p>
              <p className="text-gray-600">Ends on: {new Date(auction?.end_date).toLocaleString()}</p>
              <p className={`text-lg font-semibold ${auctionStatus === "Active" ? "text-green-600" : "text-red-600"}`}>
                Status: {auctionStatus}
              </p>
  
              {/* Conditional Bid Logic */}
              <AuctionActions
                approved={approved}
                auction={auction}
                session={true /* Mock session */}
                auctionStatus={auctionStatus}
                minimumBid={minimumBid}
              />
            </div>
          </div>
        </div>
  
        {/* Product Details */}
        <ProductDetails product={product} />
  
        {/* Recent Bids */}
        <RecentBids bids={auction.bids} />
      </section>
    );
  }
  