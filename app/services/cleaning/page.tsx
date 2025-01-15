import React from "react";
import {
  Brush,
  Home,
  Factory,
  Building2,
  Sparkles,
  Shield,
  Clock,
  Leaf,
  Users,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    title: "Office Cleaning",
    description:
      "Professional cleaning services tailored for office spaces, ensuring a pristine work environment.",
  },
  {
    icon: <Home className="w-6 h-6 text-blue-600" />,
    title: "Residential Cleaning",
    description:
      "Comprehensive home cleaning services that maintain the comfort and hygiene of your living space.",
  },
  {
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    title: "Industrial Cleaning",
    description:
      "Specialized cleaning solutions for industrial facilities, warehouses, and manufacturing plants.",
  },
  {
    icon: <Brush className="w-6 h-6 text-blue-600" />,
    title: "Post-Construction Cleaning",
    description:
      "Thorough cleanup services for newly constructed or renovated properties.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Sanitization Services",
    description:
      "Advanced disinfection and sanitization solutions for germ-free environments.",
  },
];

const features = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Professional Excellence",
    description: "Trained and certified cleaning experts",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Reliable Service",
    description: "Punctual and consistent cleaning schedules",
  },
  {
    icon: <Leaf className="w-8 h-8 text-blue-600" />,
    title: "Eco-Friendly",
    description: "Environmentally conscious cleaning solutions",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Customer Satisfaction",
    description: "Committed to exceeding expectations",
  },
];

export default function Cleaning() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('/services/cleaning_hero.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 via-blue-500/10 to-blue-400/10"></div>

        <div className="relative max-w-7xl mx-auto h-full">
          <div className="flex items-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl relative z-10">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Professional Cleaning Solutions for Every Space
              </h1>
              <p className="mt-4 text-xl text-white mb-8">
                At Art Edge, we deliver exceptional cleaning services tailored
                to your needs. From offices to homes, our expert team ensures
                spotless, healthy environments using eco-friendly solutions and
                advanced cleaning techniques.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative w-full h-[80vh] flex items-center justify-center">
        <Image
          src="/services/cle.jpg" 
          alt="Hero Background"
          layout="fill"
          objectFit="fill"
          quality={100}
          priority
          className="z-0"
        />

        <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-white"></div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <h1 className=" text-4xl md:text-5xl font-bold text-white mb-0 leading-tight">
              Professional Cleaning Solutions for Every Space
            </h1>
            <p className="text-md md:text-xl text-white mb-6 leading-relaxed">
              At Art Edge, we deliver exceptional cleaning services tailored to
              your needs. From offices to homes, our expert team ensures
              spotless, healthy environments using eco-friendly solutions and
              advanced cleaning techniques.
            </p>
          </div>
        </div>
      </div> */}
      {/* <section className="relative h-[80vh] bg-gradient-to-br from-blue-50 via-blue-100 to-white flex items-center border-2 border-red-800 p-2">
        <Image
          src="/services/cleaning.jpg"
          alt="Space nebula"
          fill
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <h1 className=" text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Professional Cleaning Solutions for Every Space
            </h1>
            <p className="text-md md:text-xl text-blue-800 mb-6 leading-relaxed">
              At Art Edge, we deliver exceptional cleaning services tailored to
              your needs. From offices to homes, our expert team ensures
              spotless, healthy environments using eco-friendly solutions and
              advanced cleaning techniques.
            </p>
          </div>
        </div>
      </section> */}

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Art Edge for Cleaning Services?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Experience Our Professional Cleaning Services?
          </h2>
          <div>
            <Link href={"/contactus"}>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
