import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="relative text-white py-6 bg-[url('/pages-header.jpg')] bg-cover bg-center h-36">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl font-bold">About Go Auctions</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2010, Go Auctions has revolutionized the online auction experience. We started with a simple idea: to create a platform where buyers and sellers could connect easily and securely from anywhere in the world.
          </p>
          <p className="text-gray-700">
            Over the years, we&apos;ve grown from a small startup to a leading name in the online auction industry, serving millions of users across the globe.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Go Auctions, our mission is to provide a transparent, efficient, and exciting marketplace for unique items and collectibles. We strive to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Connect passionate buyers with sellers of rare and valuable items</li>
            <li>Ensure a safe and secure trading environment</li>
            <li>Innovate constantly to improve the auction experience</li>
            <li>Support our community of collectors and enthusiasts</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Go Auctions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Vast Selection</h3>
              <p className="text-gray-700">From antiques to modern collectibles, we offer an unparalleled range of items.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-700">Our robust security measures ensure safe bidding and payments.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Authentication</h3>
              <p className="text-gray-700">Our team of experts verifies the authenticity of high-value items.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-gray-700">We foster a vibrant community of collectors and enthusiasts.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4">
                <Image src="/team/jane-doe.jpg" alt="Jane Doe" width={128} height={128} className="rounded-full" />
              </div>
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4">
                <Image src="/team/john-smith.jpg" alt="John Smith" width={128} height={128} className="rounded-full" />
              </div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4">
                <Image src="/team/emily-brown.jpg" alt="Emily Brown" width={128} height={128} className="rounded-full" />
              </div>
              <h3 className="text-xl font-semibold">Emily Brown</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
