"use client";
import { motion } from "framer-motion";

const PopularDishes = () => {
  const dishes = [
    {
      name: "Chicken Biryani",
      desc: "Spicy, aromatic, and full of flavor.",
      price: "Rs. 350",
      img: "/biryani.jfif",
    },
    {
      name: "Chicken Karahi",
      desc: "Cooked in traditional spices and herbs.",
      price: "Rs. 500",
      img: "/karahi.jpg",
    },
    {
      name: "Zinger Burger",
      desc: "Crispy chicken with creamy sauce.",
      price: "Rs. 300",
      img: "/burger.jpg",
    },
  ];

  return (
    <section className="bg-orange-50 py-20 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Popular Dishes
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dishes.map((dish, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={dish.img}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{dish.name}</h3>
              <p className="text-gray-600 mb-2">{dish.desc}</p>
              <span className="text-orange-600 font-bold">{dish.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;
