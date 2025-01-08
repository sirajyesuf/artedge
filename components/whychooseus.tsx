import { Users, Clock, Heart, Lightbulb, HandHeart } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experience",
    description:
      "Our team of trained professionals have years of experience in their respective fields.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We are committed to providing consistent and reliable services.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description:
      "We prioritize our customers' needs and strive to exceed their expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We use innovation to deliver the best solutions.",
  },
  {
    icon: HandHeart,
    title: "Community Involvement",
    description:
      "We show our involvement to the community through various initiatives.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver excellence through our commitment to quality,
            reliability, and customer satisfaction
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-blue-100 inline-block group-hover:bg-blue-600 transition-colors duration-300">
                <reason.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
