import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-neutral">
      <footer className="footer text-neutral-content p-10 max-w-7xl mx-auto justify-items-center">
        <nav>
          <h6 className="footer-title">Contact</h6>
          <div className="flex items-center space-x-4">
            <p className="text-lg">Call Us: <span className="font-bold">+880123456789</span></p>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" className="text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-white text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </nav>
        <nav>
  <h6 className="footer-title">Company</h6>
  <Link to="/about" className="link link-hover">About Us</Link>
  <Link to="/contact" className="link link-hover">Contact</Link>
</nav>
        <nav>
  <h6 className="footer-title">Legal</h6>
  <Link to="/terms" className="link link-hover">Terms of Use</Link>
  <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
  <Link to="/cookie" className="link link-hover">Cookie Policy</Link>
</nav>
      </footer>
      <div className="text-center py-4 text-neutral-content">
        <p>&copy; 2025 Borrow Library. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
