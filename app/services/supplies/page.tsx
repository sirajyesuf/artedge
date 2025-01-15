import React from "react";
import Image from "next/image";
import Link from "next/link";

const securitySupplies = [
  {
    title: "Safety Boots",
    image: "/services/supplies/safetyboots.png",
  },
  {
    title: "Protective Helmets",
    image: "/services/supplies/protectivehelmet.png",
  },
  {
    title: "Security Uniforms",
    image: "/services/supplies/securityuniform.png",
  },
  {
    title: "Body Armor",
    image: "/services/supplies/bodyarmor.png",
  },
];

const cleaningChemicals = [
  {
    title: "Disinfectants",
    image: "/services/supplies/disinfectant.png",
  },
  {
    title: "Sanitizers",
    image: "/services/supplies/sanitizers.png",
  },
  {
    title: "Cleaning Wipes",
    image: "/services/supplies/cleaningwipes.png",
  },
  {
    title: "Specialized Cleaning Agents",
    image: "/services/supplies/specializedcleaningagent.png",
  },
];

const cleaningEquipment = [
  {
    title: "Microfiber Cloths",
    image: "/services/supplies/microfibercloths.png",
  },
  {
    title: "Scrubbers",
    image: "/services/supplies/scrubbers.png",
  },
  {
    title: "Squeegees",
    image: "/services/supplies/squeegees.png",
  },
  {
    title: "Cleaning Sprays",
    image: "/services/supplies/cleaningsprays.png",
  },
  {
    title: "Sponges",
    image: "/services/supplies/sponges.png",
  },
];

function Product({ title, image }: { title: string; image: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-between gap-4">
      <div className="w-auto h-auto bg-white p-2">
        <Image
          src={image}
          alt={`image.split("/").pop().split(".")[0]`}
          width={600}
          height={400}
          objectFit="fill"
        />
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default function Supplies() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[80vh] bg-gradient-to-br from-blue-50 via-blue-100 to-white flex items-center bg-cover">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <h1 className=" text-3xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight pt-8">
              Comprehensive Security & Cleaning Supplies for Every Need.
            </h1>
            <p className="text-md md:text-xl text-blue-800 mb-6 leading-relaxed">
              At Art Edge, we provide top-tier security and cleaning supplies
              designed to keep your spaces safe and pristine. Whether for
              offices, commercial centers, or residential areas, our
              high-quality security equipment and cleaning tools ensure a
              secure, hygienic environment. With reliable brands, modern
              protective gear, and eco-friendly cleaning products, we meet your
              needs with efficiency and expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Security Supplies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Security Supplies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securitySupplies.map((item, index) => (
              <Product key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Supplies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Cleaning Supplies
          </h2>

          {/* Cleaning Chemicals */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Cleaning Chemicals
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cleaningChemicals.map((item, index) => (
                <Product key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Cleaning Equipment and Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Cleaning Equipment and Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cleaningEquipment.map((item, index) => (
                <Product key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Your Supplies?
          </h2>
          <div className="flex items-center justify-center">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
              <Link href="/contactus">Contact Us</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
