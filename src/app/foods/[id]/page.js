"use client";

import Header from "@/app/components/Header";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [foods, setFoods] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(null);
  const params = useParams();
  const restaurentId = params.id;
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      setIsAuthorized(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthorized || !restaurentId) return;

    async function loadFoods() {
      try {
        const res = await fetch(`/api/foods/${restaurentId}`);
        const data = await res.json();
        setFoods(data.result);
      } catch (error) {
        console.error("Failed to fetch foods", error);
      }
    }

    loadFoods();
  }, [isAuthorized, restaurentId]);

  const handleAddToCart = (food) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === food._id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({
        id: food._id,
        name: food.name,
        price: food.price,
        image: food.image,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${food.name} added to cart!`);
    router.push("/cart");
  };

  if (isAuthorized === null) return null;

  return (
    <>
      <Header />
      <main className="pt-28 px-4 sm:px-6 bg-gray-50 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800"
        >
          Menu
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {foods.map((food, index) => (
            <motion.div
              key={food._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={food.image}
                alt="No Image to Show right now"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1 text-gray-900">
                  {food.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {food.description || "No description available."}
                </p>
                <p className="text-orange-600 font-bold mb-4">
                  Rs. {food.price}
                </p>
                <button
                  onClick={() => handleAddToCart(food)}
                  className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
