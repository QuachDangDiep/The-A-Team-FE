import React, { useEffect } from "react";
import Slider from "../../Components/Slider/Slider";
import Sale from "./Sale/Sale";
import HomeContent from "./HomeContent/HomeContent";
import BrandSection from "./BrandSection/BrandSection";
import ProductList from "./ProductList/ProductList";
import Reason from "./Reason/Reason";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import NewsAndEvents from "./NewsAndEvents/NewsAndEvents";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="featured-product">
        <Sale />
      </section>
      <section className="manufacturers">
        <HomeContent />
      </section>
      <BrandSection />
      <ProductList />
      <Reason />
      <CustomerReviews />
      <NewsAndEvents />

      <Footer />
    </div>
  );
};

export default Home;
