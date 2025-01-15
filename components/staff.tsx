"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Handshake } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Yared Beyene",
    position: "deputy general Manager",
    photo: "/staff/tagel_minwuyelet.jpg",
  },
  {
    name: "yared Beyene",
    position: "General Manager",
    photo: "/staff/yared_beyene.jpg",
  },
  {
    name: "girmay teklu",
    position: "finance manager",
    photo: "/staff/girmay_teklu.jpg",
  },
  {
    name: "shiferaw ejigu ",
    position: "human resource manager",
    photo: "/staff/shiferaw_ejigu.jpg",
  },
  {
    name: "danayit amsalu",
    position: "administration and finance",
    photo: "/staff/danayit_amsalu.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative  p-2 h-96 flex items-center justify-center">
                <div className="w-90 h-90 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 capitalize">
                  {member.name}
                </h3>
                <p className="text-gray-600 capitalize">{member.position}</p>
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
