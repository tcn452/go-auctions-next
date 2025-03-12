// import Image from 'next/image';

// export default function About() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="relative text-white py-6 bg-[url('/pages-header.jpg')] bg-cover bg-center h-36">
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <h1 className="text-3xl font-bold">About Go Auctions</h1>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         <section className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
//           <p className="text-gray-700 mb-4">
//             Founded in 2010, Go Auctions has revolutionized the online auction experience. We started with a simple idea: to create a platform where buyers and sellers could connect easily and securely from anywhere in the world.
//           </p>
//           <p className="text-gray-700">
//             Over the years, we&apos;ve grown from a small startup to a leading name in the online auction industry, serving millions of users across the globe.
//           </p>
//         </section>

//         <section className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
//           <p className="text-gray-700">
//             At Go Auctions, our mission is to provide a transparent, efficient, and exciting marketplace for unique items and collectibles. We strive to:
//           </p>
//           <ul className="list-disc list-inside text-gray-700 mt-2">
//             <li>Connect passionate buyers with sellers of rare and valuable items</li>
//             <li>Ensure a safe and secure trading environment</li>
//             <li>Innovate constantly to improve the auction experience</li>
//             <li>Support our community of collectors and enthusiasts</li>
//           </ul>
//         </section>

//         <section className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Why Choose Go Auctions?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Vast Selection</h3>
//               <p className="text-gray-700">From antiques to modern collectibles, we offer an unparalleled range of items.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
//               <p className="text-gray-700">Our robust security measures ensure safe bidding and payments.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Expert Authentication</h3>
//               <p className="text-gray-700">Our team of experts verifies the authenticity of high-value items.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
//               <p className="text-gray-700">We foster a vibrant community of collectors and enthusiasts.</p>
//             </div>
//           </div>
//         </section>

//         <section className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4">
//                 <Image src="/team/jane-doe.jpg" alt="Jane Doe" width={128} height={128} className="rounded-full" />
//               </div>
//               <h3 className="text-xl font-semibold">Jane Doe</h3>
//               <p className="text-gray-600">CEO & Founder</p>
//             </div>
//             <div className="text-center">
//               <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4">
//                 <Image src="/team/john-smith.jpg" alt="John Smith" width={128} height={128} className="rounded-full" />
//               </div>
//               <h3 className="text-xl font-semibold">John Smith</h3>
//               <p className="text-gray-600">Head of Operations</p>
//             </div>
//             <div className="text-center">
//               <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4">
//                 <Image src="/team/emily-brown.jpg" alt="Emily Brown" width={128} height={128} className="rounded-full" />
//               </div>
//               <h3 className="text-xl font-semibold">Emily Brown</h3>
//               <p className="text-gray-600">Chief Technology Officer</p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// app/about-us/page.jsx
"use client";


import Image from 'next/image';


export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-64 w-full bg-blue-900">
        <Image 
          src="https://placehold.co/1200x400"
          alt="Aerial view of property"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-3xl font-bold text-white">ABOUT US</h1>
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-5xl mx-auto py-12 px-6 text-center">
        <p className="text-gray-700 mb-6">
          With a combined experience of 40 years in the auction industry, Go Property Solutions has established itself as a trusted name in the market. Our expertise spans across commercial, industrial, and residential real estate, as well as property auctions. We pride ourselves on delivering exceptional service and unparalleled results to our clients, whether they are buying, selling, or investing in properties.
        </p>
        <p className="text-gray-700">
          Our team consists of highly skilled and experienced professionals who are passionate about real estate. From seasoned brokers and agents to marketing experts and auctioneers, we have the expertise to handle all aspects of the real estate auction process.
        </p>

        {/* WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Specializations Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-center text-sm font-medium text-gray-500 mb-2">HOW WE CAN HELP</h3>
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">OUR SPECIALIZATIONS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Commercial Auctions */}
            <div className="flex flex-col items-center">
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4 relative">
                <Image 
                  src="https://placehold.co/600x400"
                  alt="Commercial Property Auction"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-lg font-bold tracking-wider text-gray-900 mb-4">COMMERCIAL PROPERTY AUCTIONS</h3>
              <p className="text-center text-gray-700">
                We specialize in auctioning office spaces, retail properties, multi-family units, and mixed-use developments, offering a diverse range of options for businesses and investors.
              </p>
            </div>

            {/* Residential Auctions */}
            <div className="flex flex-col items-center">
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4 relative">
                <Image 
                  src="https://placehold.co/600x400"
                  alt="Residential Property Auction"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-lg font-bold tracking-wider text-gray-900 mb-4">RESIDENTIAL PROPERTY AUCTIONS</h3>
              <p className="text-center text-gray-700">
                We cater to the residential market with single-family homes, condominiums, townhouses, and luxury properties, ensuring a perfect fit for every lifestyle through our competitive auction format.
              </p>
            </div>

            {/* Industrial Auctions */}
            <div className="flex flex-col items-center">
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4 relative">
                <Image 
                  src="https://placehold.co/600x400"
                  alt="Industrial Property Auction"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-lg font-bold tracking-wider text-gray-900 mb-4">INDUSTRIAL PROPERTY AUCTIONS</h3>
              <p className="text-center text-gray-700">
                Our expertise extends to warehouses, manufacturing facilities, distribution centers, and industrial parks, providing optimal solutions for industrial operations through our specialized auction services.
              </p>
            </div>

            {/* Specialized Auctions */}
            <div className="flex flex-col items-center">
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4 relative">
                <Image 
                  src="https://placehold.co/600x400"
                  alt="Specialized Auctions"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-lg font-bold tracking-wider text-gray-900 mb-4">SPECIALIZED AUCTIONS</h3>
              <p className="text-center text-gray-700">
                We organize live, onsite auctions for a competitive atmosphere and conduct seamless online auctions to reach a broader audience and maximize property exposure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-center text-sm font-medium text-gray-500 mb-2">OUR APPROACH</h3>
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">WHY US?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {/* Client-Centric Service */}
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CLIENT-CENTRIC SERVICE</h3>
                <p className="text-gray-700">
                  Our clients are at the heart of everything we do. We take the time to understand their needs and tailor our auction services to meet their specific requirements.
                </p>
              </div>
            </div>

            {/* Market Expertise */}
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">MARKET EXPERTISE</h3>
                <p className="text-gray-700">
                  Our team of seasoned professionals possesses an in-depth knowledge of the auction market, ensuring that our clients receive the most accurate and up-to-date information.
                </p>
              </div>
            </div>

            {/* Innovative Solutions */}
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">INNOVATIVE SOLUTIONS</h3>
                <p className="text-gray-700">
                  We leverage the latest technology and marketing strategies to provide innovative auction solutions that give our clients a competitive edge.
                </p>
              </div>
            </div>

            {/* Integrity and Transparency */}
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">INTEGRITY AND TRANSPARENCY</h3>
                <p className="text-gray-700">
                  We believe in building long-term relationships based on trust and transparency. Our clients can always expect honest advice and clear communication throughout the auction process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="w-full h-64 overflow-hidden rounded-lg relative">
                <Image 
                  src="https://placehold.co/600x400"
                  alt="Mission" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-sm font-medium text-gray-500 mb-2">WHAT WE STRIVE FOR</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">MISSION STATEMENT</h2>
              <p className="text-gray-700 mb-4">
                Our mission is to deliver exceptional auction services that exceed our clients&apos; expectations. We are committed to providing innovative solutions, unparalleled market expertise, and a client-centric approach to ensure the best possible outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}