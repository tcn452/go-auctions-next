import { FaCar, FaLightbulb, FaThumbsUp } from 'react-icons/fa';
import IconCard from '../Cards/IconCard'; // import the refactored IconCard component

const ApproachSection: React.FC = () => {
  return (
    <section className="flex flex-col my-10 tracking-widest items-center justify-cente">
      <div className="flex flex-col items-center mb-20">
        <h4 className="uppercase font-medium text-green-800">Our Approach</h4>
        <h2 className="uppercase tracking-wider font-semibold text-3xl">Why Choose Us?</h2>
      </div>
      
      <div className="container mx-10 grid grid-cols-2 gap-20 justify-end items-end">
        <IconCard />
        <IconCard
          icon={FaCar}
          title="Market Expertise"
          description="Our team of seasoned professionals possesses an in-depth knowledge of the real estate market, ensuring that our clients receive the most accurate and up-to-date information."
        />
        <IconCard
          icon={FaLightbulb}
          title="Innovative Solutions"
          description="We leverage the latest technology and marketing strategies to provide innovative solutions that give our clients a competitive edge."
        />
        <IconCard
          icon={FaThumbsUp}
          title="Integrity and Transparency"
          description="We believe in building long-term relationships based on trust and transparency. Our clients can always expect honest advice and clear communication."
        />
      </div>
    </section>
  );
};

export default ApproachSection;
