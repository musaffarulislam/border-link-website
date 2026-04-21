"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BorderLinkLogo from "@/assets/BorderlinkLogo.png";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="px-4 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link href="/">
            <Image
              src={BorderLinkLogo}
              alt="Border Link Customs Clearance & Logistics Dubai"
              width={120}
              height={40}
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.07 }}
              >
                <Link
                  href={link.href}
                  className="relative text-white font-semibold text-sm group"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.62 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-accent text-black font-bold rounded-lg text-sm hover:bg-secondary transition-colors duration-200 shadow-md"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <motion.button
                aria-label="Open navigation menu"
                className="text-white p-1"
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="w-7 h-7" />
              </motion.button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-primary text-white border-l border-white/10 w-72 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/10">
                  <Image
                    src={BorderLinkLogo}
                    alt="Border Link Logo"
                    width={100}
                    height={34}
                  />
                </div>

                {/* Links */}
                <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                  {[...navLinks, { href: "/contact", label: "Contact" }].map(
                    (link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.05 + index * 0.06,
                            duration: 0.3,
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-lg font-semibold transition-all text-sm ${
                              isActive
                                ? "bg-accent/15 text-accent border-l-2 border-accent pl-3"
                                : "hover:bg-white/10 text-white"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    }
                  )}
                </nav>

                {/* Mobile CTA */}
                <div className="px-6 pb-8">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-5 py-3 bg-accent text-black font-bold rounded-lg hover:bg-secondary transition-colors text-sm"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};
