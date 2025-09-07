import BlogContactCTA from "@/components/blogPage/BlogContactCTA";
import BlogHero from "@/components/blogPage/BlogHero";
import BlogSection from "@/components/blogPage/BlogSection";
import React from "react";

const page = () => {
  return (
    <main>
      <BlogHero />
      <BlogSection />
      <BlogContactCTA />
    </main>
  );
};

export default page;
