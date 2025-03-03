import logo from "../images/decibel.logo.sm.png";
import logo1 from "../images/f.jpg";
import logo2 from "../images/in.jpg";
import logo3 from "../images/insta.jpg";
import logo4 from "../images/x.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
      

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm sm:text-lg">
          {/* Products */}
          
          <div className="mb-10 flex flex-col-reverse gap-6">
          <h1 className="text-2xl font-bold">decibel. <sup className="font-light">&copy;</sup></h1>
          
          <div className="flex items-center space-x-2 rounded-md">
                    <img src={logo} alt="Logo" className="h-20 w-auto rounded-lg " />
                  </div>
        </div>






          <div>
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Web Dev</li>
              <li>App Dev</li>
              <li>Tourism</li>
              <li>Med Help</li>
              
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Product enterprises</li>
              <li>IT Services</li>
              <li>IT Staffing</li>
              <li>Startups</li>
              <li>Universities/Colleges</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Blogs</li>
              <li>Case Study</li>
              <li>Ebooks</li>
              <li>Whitepapers</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Projects</li>
              <li>Contacts</li>
              <li>Open Source</li>
           
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Recruitment</li>
              <li>Training</li>
              <li>Placement</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="text-gray-400">&copy; decibel. 2025</div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white flex flex-row gap-2"  target="_blank"><img src={logo2} alt="in logo" className="text-sm w-6 h-6 rounded-sm"/> LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white flex flex-row gap-2"><img src={logo3} alt="in logo" className="text-sm w-6 h-6 rounded-sm" />  Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white flex flex-row gap-2"><img src={logo4} alt="in logo"  className="text-sm w-6 h-6 rounded-sm"/>  Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white flex flex-row gap-2"><img src={logo1} alt="in logo"  className="text-sm w-6 h-6 rounded-sm"/>  Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
