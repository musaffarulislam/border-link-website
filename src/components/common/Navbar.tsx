import React from "react";
import Image from "next/image";
import BorderLinkLogo from "@/assets/BorderlinkLogo.png";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full bg-primary text-primary">
      <div className="mx-4 md:mx-12 flex justify-between items-center py-4">
        <Link href={"/"}>
          <Image src={BorderLinkLogo} alt="Logo" width={120} height={40} />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white font-semibold hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-white font-semibold hover:underline">
            About Us
          </Link>
          <Link
            href="/services"
            className="text-white font-semibold hover:underline"
          >
            Services
          </Link>
          <Link
            href="/industries"
            className="text-white font-semibold hover:underline"
          >
            Industries
          </Link>
          <Link href="/blog" className="text-white font-semibold hover:underline">
            Blog
          </Link>
          <Link href="/faq" className="text-white font-semibold hover:underline">
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-white font-semibold hover:underline"
          >
            Contact
          </Link>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <Menu className="text-white w-7 h-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white">
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="/" className="font-semibold hover:underline">
                  Home
                </Link>
                <Link href="/about" className="font-semibold hover:underline">
                  About Us
                </Link>
                <Link href="/services" className="font-semibold hover:underline">
                  Services
                </Link>
                <Link href="/industries" className="font-semibold hover:underline">
                  Industries
                </Link>
                <Link href="/blog" className="font-semibold hover:underline">
                  Blog
                </Link>
                <Link href="/faq" className="font-semibold hover:underline">
                  FAQ
                </Link>
                <Link href="/contact" className="font-semibold hover:underline">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
