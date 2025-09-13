"use client";

import React from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { ArrowDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const dancingScript = Dancing_Script({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
	display: "swap",
});

const Introduction = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#intro",
      {
        y: 3,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
      }
    );

	gsap.fromTo(
		".para",
		{
		  y: 3,
		  opacity: 0,
		},
		{
		  y: 0,
		  opacity: 1,
		  delay: 1,
		  stagger: 0.2,
		  ease: "power1.in",
		}
	  );
	
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <p id="intro">
        Hi I&apos;m <span className={`${dancingScript.className} text-6xl ml-3`}>Sacred</span>
      </p>

      <div className="w-6/12 flex flex-col gap-5">
        <p className="para font-semibold text-gray-200">
          I&apos;m a web developer, digital creator, and an aspiring
          entrepreneur. I combine design, storytelling and technology to build
          digital experiences, businesses, and creative works that inspire and
          solve real problems.
        </p>

        <div className="para flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold border border-[#ffffff] py-2 px-6 rounded-md"
          >
            Learn How
            <div className="p-1 rounded-md border border-[#ffffff]">
              <ArrowDown size={14} />
            </div>
          </Link>

		  <Link
            href="/"
            className="font-semibold border border-[#ffffff] py-2 px-6 rounded-md"
          >
            More about me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
