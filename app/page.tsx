
import HeroSection from "./components/global/hero";
import LatestAuctions from "./components/home/sections/LatestAuctions";
import ApproachSection from "./components/home/sections/OurApproach";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
   <>
   <HeroSection />
   <LatestAuctions />
   <ApproachSection />
   </>
  );
}
