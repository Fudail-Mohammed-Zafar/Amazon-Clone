import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import React from "react";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-[var(--surface-main)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[540px] bg-[radial-gradient(circle_at_top,_rgba(15,76,92,0.2)_0,_rgba(244,246,251,0.95)_55%,_rgba(244,246,251,1)_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-40 -z-10 h-56 w-56 rounded-full bg-[rgba(255,141,92,0.2)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-28 -z-10 h-72 w-72 rounded-full bg-[rgba(15,76,92,0.16)] blur-3xl" />
      <Navbar />
      <main className="space-y-3 pb-8 sm:space-y-6">
        <Header />
        <BlogList />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
