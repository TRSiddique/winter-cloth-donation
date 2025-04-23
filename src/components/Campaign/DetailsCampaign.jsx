import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";


const DetailsCampaign = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch("/campaigns.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === parseInt(id));
        setCampaign(selected);
      });
  }, [id, user, navigate]);

  if (!user) {
    return null; // optionally show loading or redirect
  }

  if (!campaign) {
    return (
      <div className="text-center mt-10 text-xl text-gray-600">
        Loading campaign details...
      </div>
    );
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon.");
    e.target.reset();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">{campaign.title}</h1>
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-[400px] object-cover rounded-xl mb-6"
      />
      <p className="text-lg text-gray-700 mb-4"><strong>Description:</strong> {campaign.description}</p>
      <p className="text-lg text-gray-600 mb-2"><strong>Division:</strong> {campaign.division}</p>
      <p className="text-lg text-gray-600 mb-2"><strong>Location:</strong> {campaign.division}, Bangladesh</p>
      <p className="text-lg text-gray-600 mb-2"><strong>Contact:</strong> {campaign.contactInfo}</p>
      <p className="text-lg text-gray-600 mb-4"><strong>Status:</strong> {campaign.status}</p>

      
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Donate Items</h2>
        <label className="block mb-2">Quantity</label>
        <input type="text" name="quantity" className="input input-bordered w-full mb-4" placeholder="e.g., 2 jackets" required />
        
        <label className="block mb-2">Item Type</label>
        <input type="text" name="itemType" className="input input-bordered w-full mb-4" placeholder="e.g., Blanket, Jacket" required />
        
        <label className="block mb-2">Pickup Location</label>
        <input type="text" name="location" className="input input-bordered w-full mb-4" placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka" required />
        
        <label className="block mb-2">Additional Notes (Optional)</label>
        <textarea name="notes" className="textarea textarea-bordered w-full mb-4" placeholder="Any extra info..." />

        <button type="submit" className="btn btn-primary">Submit Donation</button>
      </form>

      <Link to='/campaigns' className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Back to Campaign
      </Link>
    </div>
  );
};

export default DetailsCampaign;
