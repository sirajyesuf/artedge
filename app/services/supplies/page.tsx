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
        />
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default function Supplies() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] md:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-b-lg">
          <div className="block md:hidden">
            <Image
              src="/services/supplies_hero.png"
              alt="Hero Background"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/services/supplies_hero.png"
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 via-blue-500/80 to-blue-500/90 md:bg-gradient-to-r md:from-blue-600/80 md:via-blue-500/80"></div>

        {/* Content */}
        <div className="relative max-w-full mx-auto h-full">
          <div className="flex items-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Comprehensive Security & Cleaning Supplies for Every Need.
              </h1>
              <p className="mt-4 text-xl text-blue-100 mb-8">
                At Art Edge, we offer premium security and cleaning supplies to
                keep your spaces safe and spotless. From modern protective gear
                to eco-friendly cleaning products, we deliver reliable solutions
                for offices, commercial centers, and homes.
              </p>
            </div>
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
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Your Supplies?
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
