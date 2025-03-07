import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[497px] bg-[url('/car_silhouette.jpg')] text-white overflow-hidden">
        <div className="relative h-full bg-gradient-to-br from-slate-100/10 to-black/70 bg-cover bg-center">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-6xl font-bold mb-2 animate-fade-in-up">
              Buy. Sell. Best.
            </h1>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="flex h-16 justify-center items-center gap-10 w-full bg-white">
        <div className="gap-10 flex">
          <input
            className="h-10 p-6 border border-slate-200 rounded-md placeholder:text-slate-700"
            placeholder="Name"
            type="text"
          />
          <input
            className="h-10 p-6 border border-slate-200 rounded-md placeholder:text-slate-700"
            placeholder="Email"
            type="email"
          />
          <input
            className="h-10 p-6 border border-slate-200 rounded-md placeholder:text-slate-700"
            placeholder="Phone"
            type="tel"
          />
          <button className="h-10 p-6 rounded-md bg-green-800 text-white flex items-center justify-center text-lg uppercase font-medium">
            List your Property Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
