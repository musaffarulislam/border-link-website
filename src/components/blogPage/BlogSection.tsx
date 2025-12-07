// components/BlogSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How to Clear Customs at the Hatta Border",
    description:
      "Step-by-step guide to efficiently clear your shipments at Hatta border without delays.",
    url: "/blog/hatta-customs-clearance",
  },
  {
    title: "Dubai Municipality Approval Guide",
    description:
      "Learn how to get your products approved by Dubai Municipality quickly and compliantly.",
    url: "/blog/dubai-municipality-approval",
  },
  {
    title: "Common Mistakes in Customs Documentation",
    description:
      "Avoid common pitfalls when submitting customs paperwork for imports in UAE.",
    url: "/blog/common-customs-mistakes",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white font-poppins mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Blog & Resources
        </motion.h2>

        {/* Blog Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Link
                href={post.url}
                className="block rounded-lg bg-white text-primary p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 h-full"
              >
                <h3 className="text-xl font-semibold font-poppins mb-2">
                  {post.title}
                </h3>
                <p className=" font-inter">{post.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
