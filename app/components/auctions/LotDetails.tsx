// components/LotDetails.tsx
const LotDetails = ({ title, auctionDate, location, description }: any) => {
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
       
      </section>
    );
  };
  
  export default LotDetails;
  