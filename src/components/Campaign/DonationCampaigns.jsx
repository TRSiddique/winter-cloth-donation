import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

const DonationCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('/campaigns.json')
      .then(res => res.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  //console.log(campaigns); // Check if campaigns are being logged

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">All Donation Campaigns</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map(campaign => (
          <div
            key={campaign.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition"
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {campaign.title}
              </h2>
              <p className="text-gray-600 mb-2">{campaign.description.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Division:</strong> {campaign.division}
              </p>

              <Link
                to={`/campaign/${campaign.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCampaigns;
