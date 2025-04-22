import React from 'react';
import bannerImg from './../../assets/winter1.jpg'; // ✅ Make sure this path is correct

const Banner = () => {
  return (
    <div className="w-full bg-white py-10 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <img
          src={bannerImg}
          alt="Winter Donation"
          className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Winter Cloth Donation
        </h1>
        <p className="text-gray-600 text-lg">
          Let’s spread warmth together. Donate your unused winter clothes and help someone stay warm this season. Every act of kindness counts.
        </p>
      </div>
    </div>
  );
};

export default Banner;
