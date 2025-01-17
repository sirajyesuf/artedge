import React from "react";
import { GraduationCap, ClipboardCheck, Users } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const whatweoffer = [
  {
    image: "/services/skill/securitytraning.png",
    title: "Security Training",
    description:
      "Training programs designed to equip security personnel with effective defense techniques and emergency response skills.",
  },
  {
    image: "/services/skill/cleaningtraning.png",
    title: "Cleaning Staff Training",
    description:
      "Training programs designed to enhance the effectiveness of cleaning staff in using efficient cleaning methods, operating cleaning equipment, and improving their customer relationship skills",
  },
  {
    image: "/services/skill/customerservice.png",
    title: "Customer Service Training",
    description:
      "Training programs designed to enhance the interpersonal and service skills of frontline employees to ensure customer satisfaction.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Building a Skilled and Professional Workforce
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Empowering employees through expert-led training programs for
            security, cleaning, and customer service.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatweoffer.map((service, index) => (
              <TrainingCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Our Training Programs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={GraduationCap}
              title="Expert Trainers"
              description="Learn from industry professionals with years of practical experience."
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="Structured Programs"
              description="Well-designed modules ensuring comprehensive skill development."
            />
            <FeatureCard
              icon={Users}
              title="Hands-on Learning"
              description="Practice-oriented training with real-world scenarios and demonstrations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Elevate Your Skills?
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

function TrainingCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-8 justify-between">
      <div className="h-[60%] p-6 flex items-center justify-center bg-gray-100 rounded-lg">
        <Image
          src={image}
          alt={`image.split("/").pop().split(".")[0]`}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
