import React from 'react';

const HowItWorks = () => {
    return (
        <section className="p-6 my-6">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow-lg p-4 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">1. Choose a Campaign</h3>
            <p>Browse the donation campaigns and choose one that touches your heart.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">2. Fill Donation Form</h3>
            <p>Provide pickup details like item type, quantity, and your location.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">3. Volunteer Collects</h3>
            <p>Our volunteers will pick up your items and deliver to people in need.</p>
          </div>
        </div>
      </section>
    )
  }

export default HowItWorks;