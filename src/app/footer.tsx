"use client";

import React from "react";

import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  {
    name: "Career",
    href: "https://hustlexclub.notion.site/Career-2d32355fb69c485b92682d5627f181dd",
  },
  { name: "Get access", href: "/download" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Shipping Policy", href: "/shipping" },
  { name: "Refund Policy", href: "/refund" },
];

const socialLinks = [
  { href: "https://twitter.com/hustlexclub", src: <Twitter /> },
  { href: "https://www.instagram.com/hustlex.club", src: <Instagram /> },
  { href: "mailto:cx@hustlex.club", src: <Mail /> },
  { href: "https://www.linkedin.com/company/hustlexclub", src: <Linkedin /> },
];

export const Footer = () => {
  const pathname = usePathname();
  return (
    <div
      className={`w-full p-4 xl:px-20 xl:py-8 border-t border-black-300 bg-black`}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center text-white">
        <div className="flex flex-col items-center justify-between gap-2 xl:items-start ">
          <img
            src="/logo-lg.png"
            alt="Kyathanamakki Homestay Logo"
            className="h-40 filter brightness-150 contrast-90"
          />
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 p-2 flex items-center justify-center bg-black-500/10 border-white-500/75 border-1 rounded-full shadow-xl transition-transform duration-200 transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-black-500/20 hover:shadow-2xl"
              >
                {social.src}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 xl:items-start flex-col">
            <p className="text-white/75 text-xl text-left">
              &copy; 2025 | KMAKKI PVT LTD
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 xl:items-start ">
          <div className="flex items-center gap-4 xl:items-start flex-col">
            <p className="text-white/75 text-2xl text-left">Location</p>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-white/50 text-xl xl:text-left text-center">
                Kyathanamakki homestay,
                <br />
                near horanadu, kalasa,
                <br />
                chikkamagalur district-577181
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 xl:items-start flex-col">
            <p className="text-white/75 text-2xl text-left">Contact</p>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-white/50 text-xl xl:text-left text-center">
                +91 9945502000
                <br />
                reservations@Ayatanacoorg.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
