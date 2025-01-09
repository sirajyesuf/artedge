"use client";

import { useState } from "react";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
}

export default function Clients() {
  const [clientLogos, setClientLogos] = useState<Client[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    fetch("/api/clients")
      .then((response) => response.json())
      .then((data) => setClientLogos(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isInView) {
      controls.start("visible");
      intervalId = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 1;
          if (
            containerRef.current.scrollLeft >=
            (containerRef.current.scrollWidth -
              containerRef.current.clientWidth) /
              2
          ) {
            containerRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    } else {
      controls.stop();
    }

    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [isInView, controls]);

  return (
    <div className="bg-gray-100 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Our Trusted Clients
        </h2>
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ height: "100px" }}
        >
          <motion.div
            className="flex space-x-8 absolute"
            animate={controls}
            initial="hidden"
            variants={{
              visible: {
                x: [0, -1920],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear",
                  },
                },
              },
            }}
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-20 w-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => controls.start("visible")}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={100}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
