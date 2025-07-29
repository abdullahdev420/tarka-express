"use client";

import { motion } from "framer-motion";
import React from "react";

const steps = [
  {
    icon: "🛒",
    title: "Choose Your Meal",
    desc: "Browse our menu and pick your favorite desi dishes from top-rated restaurants.",
  },
  {
    icon: "🍳",
    title: "Restaurant Prepares",
    desc: "Your order is cooked fresh and packed with care by the restaurant.",
  },
  {
    icon: "🛵",
    title: "Delivered To You",
    desc: "Our rider delivers your hot and tasty meal straight to your door.",
  },
];

const HowitWorks = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-20 px-6 text-center"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-10 text-orange-600"
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-orange-100 text-orange-600 p-6 rounded-full mb-4 text-4xl">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowitWorks;
