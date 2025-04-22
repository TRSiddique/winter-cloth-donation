import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 mt-10 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Site Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">WinterWarmth</h2>
          <p>Spreading warmth across Bangladesh through your donations.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center gap-2"><FaPhoneAlt /> +880 1234-567890</p>
          <p className="flex items-center gap-2"><FaEnvelope /> donate@winterwarmth.org</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} WinterWarmth. All rights reserved. Developed by Tasfiqur Rahman Siddique.
      </div>
    </footer>
  );
};

export default Footer;
