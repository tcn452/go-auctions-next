import { FaCar, FaLightbulb, FaThumbsUp } from 'react-icons/fa';
import IconCard from '../Cards/IconCard'; // import the refactored IconCard component

const ApproachSection: React.FC = () => {
  return (
    <section className="flex flex-col my-10 tracking-widest items-center justify-cente">
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
    </section>
  );
};

export default ApproachSection;
