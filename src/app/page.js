import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PopularDishes from "./components/PopularDishes";
import TopRestaurants from "./components/TopRestaurents";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-900">
        <Hero />
        <HowItWorks />
        <PopularDishes />
        <TopRestaurants/>
      </main>

      <Footer />
    </>
  );
}
