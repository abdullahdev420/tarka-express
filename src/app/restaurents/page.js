"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  const [restaurents, setRestaurents] = useState([]);

  useEffect(() => {
    loadAllRestaurents();
  }, []);

  const loadAllRestaurents = async () => {
    let response = await fetch("http://localhost:3000/api/allrestaurents");
    response = await response.json();
    if (response.result) {
      setRestaurents(response.result);
    } else {
      alert("Error");
    }
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Restaurants</h1>

        {restaurents.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurents.map((item, index) => (
              <motion.div
                key={index}
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
};

export default page;
