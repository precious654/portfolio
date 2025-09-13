"use client"
import logo from "@/public/assets/logo.svg"
import logo1 from "@/public/assets/logo1.svg"
import logo2 from "@/public/assets/logo2.svg"
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import React from 'react'

const Mousetrail = () => {
    useGSAP(() => {
        let lastX = 0;
        let lastY = 0;
        let currentIndex = 0;
        let imgs = [logo, logo1, logo2];
        
        const createTrail = (x, y) => {
            const img = document.createElement("img");
            img.classList.add("image-trail");
            img.src = imgs[currentIndex].src;
            document.body.appendChild(img);
            currentIndex = (currentIndex + 1) % imgs.length;
           
            gsap.set(img, {
                x: x - 25, // Center the image on cursor
                y: y - 25,
                opacity: 0,
                scale: 0,
            });
            
            gsap.to(img, {
                opacity: 1,
                scale: 1,
                duration: .4,
                ease: "power2.out"
            });
            
            gsap.to(img, {
                scale: 0.2,
                opacity: 0,
                duration: 1,
                delay: .3,
                ease: "power2.in",
                onComplete: () => {
                    // Clean up the image element after animation
                    img.remove();
                }
            });
        }  
        
        const handleMouseMove = (e) => {
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if(distance > 60) {
                createTrail(e.clientX, e.clientY);
                lastX = e.clientX;
                lastY = e.clientY;
            }
        }
        
        window.addEventListener("mousemove", handleMouseMove);
        
        // Cleanup function
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });

    // This component doesn't need to render anything visible
    return null;
}

export default Mousetrail;