import { Shield, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center sm:justify-start">
              <Shield className="h-7 w-7 md:h-8 md:w-8 text-blue-500" />
              <span className="ml-2 text-lg md:text-xl font-bold">
                Art Edge Trading
              </span>
            </div>
            <p className="mt-4 text-gray-400 text-center sm:text-left text-sm md:text-base">
              Your trusted partner for security and cleaning excellence in
              Ethiopia.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm md:text-base">
                Security Services
              </li>
              <li className="text-gray-400 text-sm md:text-base">
                Cleaning Solutions
              </li>
              <li className="text-gray-400 text-sm md:text-base">
                Training Programs
              </li>
              <li className="text-gray-400 text-sm md:text-base">
                Material Supply
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +251 911 123 456
              </li>
              <li className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                info@artedgetrading.com
              </li>
              <li className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Art Edge Trading PLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
