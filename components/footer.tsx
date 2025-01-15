import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center sm:justify-start">
              <Link href="/">
                <Image
                  src="/artedgelogowhite-removebg.png"
                  alt="logo"
                  width={160}
                  height={200}
                  className="max-h-full max-w-full object-contain"
                  priority
                />
              </Link>
            </div>
            <p className="mt-2 text-gray-400 text-center sm:text-left text-sm md:text-base">
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
                  href="/#service_section"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#client_section"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              Services
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/services/security"
                className="text-gray-400 text-sm md:text-base"
              >
                Security Services
              </Link>
              <Link
                href="/services/cleaning"
                className="text-gray-400 text-sm md:text-base"
              >
                Cleaning Solutions
              </Link>
              <Link
                href="/services/supplies"
                className="text-gray-400 text-sm md:text-base"
              >
                Provision of Security and Cleaning Supplies
              </Link>
              <Link href="/" className="text-gray-400 text-sm md:text-base">
                Skill Development
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +251 911 389 703
              </li>
              <li className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                artedgetradingplc@gmail.com
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
