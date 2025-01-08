import { Shield, Lightbulb, CheckCircle, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Professionalism",
    description: "Highly trained staff committed to excellence",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge solutions for modern challenges",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "Consistent, dependable service you can trust",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Dedicated to improving local communities",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <reason.icon className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
