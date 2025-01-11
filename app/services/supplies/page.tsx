import React from "react";
import {
  Droplets,
  Hammer,
  Phone,
  Mail,
  Footprints,
  HardHat,
  ShirtIcon,
  Brush,
  Trash2,
  Sparkles,
  Glasses,
  HandMetal,
  Shield,
} from "lucide-react";

function Product({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow flex flex-col items-center">
      <Icon className="w-12 h-12 text-blue-600 mb-4 flex justify-center" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

const securitySupplies = [
  {
    icon: Footprints,
    title: "Safety Boots",
  },
  {
    icon: HardHat,
    title: "Protective Helmets",
  },
  {
    icon: ShirtIcon,
    title: "Security Uniforms",
  },
  {
    icon: Shield,
    title: "Body Armor",
  },
];

const cleaningChemicals = [
  {
    icon: Droplets,
    title: "Disinfectants",
  },
  { icon: Shield, title: "Sanitizers" },
  {
    icon: Sparkles,
    title: "Cleaning Wipes",
  },
  {
    icon: Droplets,
    title: "Specialized Cleaning Agents",
  },
];

const cleaningEquipment = [
  {
    icon: Sparkles,
    title: "Microfiber Cloths",
  },
  { icon: Hammer, title: "Scrubbers" },
  {
    icon: Brush,
    title: "Abrasive Products",
  },
  { icon: Hammer, title: "Squeegees" },
  { icon: Shield, title: "Cleaning Sprays" },
  { icon: Sparkles, title: "Sponges" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Provision of Cleaning Supplies
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            High-quality security, protection, and cleaning services through
            reliable suppliers of essential equipment and tools.
          </p>
        </div>
      </section>

      {/* Security Supplies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Security Supplies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {cleaningEquipment.map((item, index) => (
                <Product key={index} {...item} />
              ))}
            </div>
          </div>

          {/* PPE Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Personal Protective Equipment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cleaningEquipment.map((item, index) => (
                // <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                //   <div className="text-blue-600 mb-3">{item.icon}</div>
                //   <h4 className="font-semibold">{item.title}</h4>
                // </div>
                <Product key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
