"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(null);
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
    if (isAuthorized) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) setCart(JSON.parse(storedCart));
    }
  }, [isAuthorized]);

  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleCheckout = () => {
    localStorage.removeItem("cart");
    setCart([]);
    alert("Order placed successfully!");
    router.push("/");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (isAuthorized === null) return null;

  return (
    <>
      <Header />
      <motion.div
        className="p-6 min-h-screen pt-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your Cart
        </motion.h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Rs. {item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Remove
                </button>
              </motion.div>
            ))}

            <motion.div
              className="text-right text-xl font-bold text-orange-600"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Total: Rs. {total}
            </motion.div>

            <motion.button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl mt-6"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
            >
              Checkout
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
