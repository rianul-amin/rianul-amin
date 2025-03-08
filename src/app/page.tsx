"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import FirstSection from "@/components/LandingPage/FirstSection";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const lenis = new Lenis({
      duration: 1.5,  
      wrapper: scrollContainerRef.current,
      content: scrollContainerRef.current, 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="lg:h-[calc(100vh-60px)] h-[calc(100vh-160px)] w-full overflow-y-auto grid gap-[5px]"
    >
      <FirstSection />
      <FirstSection />
      <FirstSection />
      <FirstSection />
    </div>
  );
}
