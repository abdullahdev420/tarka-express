"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    loadAllRestaurants();
  }, []);

  const loadAllRestaurants = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/allrestaurents");
      const data = await res.json();

      if (data.result) {
        setRestaurants(data.result);
      } else {
        alert("No restaurants found.");
      }
    } catch (error) {
      console.error("Failed to load restaurants:", error);
      alert("Something went wrong while fetching data.");
    }
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Restaurants</h1>

        {restaurants.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurants.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={item.img_path}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.address}</p>

                  <Link href={`/foods/${item._id}`}>
                    <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600">
                      Order Foods
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
