"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-primary selection:text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-semibold mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-md mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Oops! The page you are looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/"
            className="px-8 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-secondary transition-all transform hover:scale-105"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
