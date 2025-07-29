"use client";
import { motion } from "framer-motion";

const topRestaurants = [
  {
    name: "Kolachi",
    cuisine: "Pakistani, BBQ, seafood, Asian, Middle Eastern, and Afghan Dishes.",
    location: "Do Darya, Abdul Sattar Edhi Ave, Karachi",
    image: "/kolachi.jfif",
  },
  {
    name: "Saltanat",
    cuisine: "Pakistani, BBQ, Continental, and Chinese dishes.",
    location: "National Stadium Rd, Karsaz Faisal Cantonment, Karachi",
    image: "/Saltanat.webp",
  },
  {
    name: "Cafe Aylanto",
    cuisine: "Mediterranean and European",
    location: "D 141, Block 4 Clifton, Karachi.",
    image: "/cafe.jfif",
  },
];

export default function TopRestaurants() {
  return (
    <section className="bg-white py-20 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Top Restaurants
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topRestaurants.map((restaurant, index) => (
          <motion.div
            key={index}
            className="bg-orange-50 rounded-2xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-1">
              <h3 className="text-xl font-semibold text-orange-700">
                {restaurant.name}
              </h3>
              <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
              <p className="text-gray-500 text-sm">{restaurant.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
