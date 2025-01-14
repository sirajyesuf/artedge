"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Handshake } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Security Manager",
    photo: "/staff/1.jpg",
    description: "10+ years of experience in security management.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Cleaning Supervisor",
    photo: "/staff/2.jpg",
    description: "Expert in sustainable cleaning practices.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Operations Director",
    photo: "/staff/3.jpg",
    description: "Streamlining service delivery for 5+ years.",
  },
  {
    id: 4,
    name: "Sarah Brown",
    position: "HR Manager",
    photo: "/placeholder.svg?height=300&width=300",
    description: "Dedicated to building a strong, diverse team.",
  },
  {
    id: 5,
    name: "David Lee",
    position: "Customer Relations",
    photo: "/placeholder.svg?height=300&width=300",
    description: "Ensuring client satisfaction since 2018.",
  },
  {
    id: 6,
    name: "Emily Chen",
    position: "Training Coordinator",
    photo: "/placeholder.svg?height=300&width=300",
    description: "Developing top-tier security professionals.",
  },
];

export default function Staff() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            The skilled professionals driving excellence in security, cleaning,
            and service delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 -z-10 opacity-5">
        <Shield size={200} />
      </div>
      <div className="absolute bottom-0 right-0 -z-10 opacity-5">
        <Handshake size={200} />
      </div>
    </section>
  );
}
