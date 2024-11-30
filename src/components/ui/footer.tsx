"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.webp";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        {/* Logo or Icon */}
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="logo"
            className="rounded-full"
            width={40}
            height={40}
          />
          <Link href="/" className="text-xl font-bold text-green-700">
            Plantify
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              href="#"
              className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Copyright Section */}
      <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
        No Copyright © {year}&nbsp;
        <Link
          href="/"
          rel="noreferrer"
          className="text-slate-700 hover:text-slate-500"
        >
          Plantify
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
