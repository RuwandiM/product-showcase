"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/logo.png";
import profilePic from "../../public/profile.jpg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const isProductPage = /^\/product(\/\w+)?$/.test(pathname)
  const isContactPage = pathname === "/contact";

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

            <Link href="/">
                <Image src={logo} alt="Logo" className="navbar-logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
                <Link href="/product" className={
                    isProductPage ? "navbar-link-active" : "navbar-link"
                }>
                    Products
                </Link>
                <Link href="/contact" className={
                    isContactPage ? "navbar-link-active" : "navbar-link"
                }>
                    Contact Us
                </Link>
                <Link href="/">
                    <FontAwesomeIcon icon={faCartShopping} className="navbar-link" />
                </Link>
                <Link href="/">
                    <Image src={profilePic} alt="Profile" className="rounded-full navbar-profile"/>
                </Link>
            </div>

            <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                >
                <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-white px-4 pb-4">
                <Link
                    href="/product"
                    className={
                        isProductPage ? "navbar-link-active" : "block py-2 navbar-link"
                    }
                    onClick={() => setIsOpen(false)}
                >
                    Products
                </Link>
                    
                <Link
                    href="/contact"
                    className={
                        isContactPage ? "navbar-link-active" : "block py-2  navbar-link"
                    }
                    onClick={() => setIsOpen(false)}
                >
                    Contact Us
                </Link>
                
                <Link
                    href="/"
                    className="block py-2 navbar-link"
                    onClick={() => setIsOpen(false)}
                >
                    Cart
                </Link>
                
                <Link
                    href="/"
                    className="block py-2 navbar-link"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="flex items-center space-x-2">
                        <span>Profile</span>
                    </div>
                </Link>
            </div>
        )}
    </nav>
  );
};

export default Navbar;
