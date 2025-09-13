"use client";

import React from "react";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = React.useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      // Create timeline for navbar animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "body", // Use body as trigger for full page scroll
          start: "top top", // Start immediately when scrolling begins
          end: "70% top", // End when middle of page reaches top of viewport
          scrub: 0.1, // Smooth scrubbing with 1 second lag
          markers: false, // Set to true for debugging
          invalidateOnRefresh: true,
        },
      });

      // Animate navbar out
      timeline.to(navRef.current, {
        y: -100, // Move up and out of view
        opacity: 0, // Fade out
        ease: "power1.inOut",
      });
      setTimeout(() => ScrollTrigger.refresh(), 100);
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="w-full lg:py-10 py-5 px-5 lg-px-0 flex lg:justify-center lg:items-center justify-end items-end fixed top-0 left-0 z-50"
    >
      <nav className="hidden lg:flex items-center justify-between w-5/12 p-4 rounded-lg bg-background/20 backdrop-blur-lg">
        <Link href="/">Home</Link>
        <Link href="/">About Me</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Blog</Link>
        <div className="w-0.5 h-5 bg-gray-300"></div>
        <button>Menu</button>
      </nav>

      <nav className="lg:hidden py-2 px-6 rounded-lg bg-background/20 backdrop-blur-lg border-2 border-red-300">
        <button>Menu</button>
      </nav>
    </header>
  );
};

export default Navbar;
