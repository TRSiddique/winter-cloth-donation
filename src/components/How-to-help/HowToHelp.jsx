import React from "react";

const HowToHelp = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
          How You Can Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Donate Clothes</h3>
            <p className="text-gray-600 mb-4">
              You can donate winter clothes, blankets, jackets, sweaters, and other essential items to help those in need.
              Every small donation counts and can make a big difference for a person struggling in the cold.
            </p>
            <a
              href="/campaigns"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Donation Campaigns
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              If you want to make a direct impact, volunteer to help us collect and distribute donations in your area.
              Your time and effort will help us bring warmth to those in need.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Become a Volunteer
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Spread the Word</h3>
            <p className="text-gray-600 mb-4">
              Share our mission with your family, friends, and community. The more people know about the campaign, the
              more donations we can collect.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact Us for Information
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Your contributions can bring warmth to someone's life!
          </h3>
          <p className="text-gray-600 mb-4">
            Thank you for your kindness and generosity in making this world a better place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
