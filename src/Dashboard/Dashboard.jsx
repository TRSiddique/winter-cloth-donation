import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="text-center mt-20 text-2xl text-red-500">
        Unauthorized Access! Please Login.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Welcome, {user.displayName || "User"}!
      </h2>
      <div className="bg-white shadow-lg p-6 rounded-xl text-center">
        <img
          src={user.photoURL || "https://i.ibb.co/9tYjLZP/user.png"}
          alt="User"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h3 className="text-2xl font-semibold">{user.displayName || "No Name"}</h3>
        <p className="text-gray-600 mt-2">{user.email}</p>
        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          onClick={() => navigate("/registration")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
