import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    // Animate heading
    scrollTimeline.from("#about h2", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "expo.out",
    });

    // Animate grids
    scrollTimeline.from(
      ".top-grid div, .bottom-grid div",
      {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.1,
      },
      "-=0.5"
    );
  });

  return (
    <div id="about" className="py-16">
      {/* Text Section */}
      <div className="mb-16 md:px-0 px-5">
        <div className="grid md:grid-cols-12 gap-8 content">
          {/* Left Side */}
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Where every detail matters <span className="text-white">-</span>{" "}
              from middle to garnish
            </h2>
          </div>

          {/* Right Side */}
          <div className="md:col-span-4 sub-content flex flex-col justify-center gap-6">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first sip to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white">
                More than <span className="font-semibold">120,000+</span>{" "}
                customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Grid */}
      <div className="grid md:grid-cols-12 gap-6 top-grid mb-6">
        <div className="md:col-span-3">
          <div className="noisy rounded-2xl overflow-hidden">
            <img src="/images/abt1.png" alt="Cocktail 1" className="w-full" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy rounded-2xl overflow-hidden">
            <img src="/images/abt2.png" alt="Cocktail 2" className="w-full" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="noisy rounded-2xl overflow-hidden">
            <img src="/images/abt5.png" alt="Cocktail 5" className="w-full" />
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-12 gap-6 bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy rounded-2xl overflow-hidden">
            <img
              src="/images/abt3.png"
              alt="Cocktail grid img 3"
              className="w-full"
            />
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="noisy rounded-2xl overflow-hidden">
            <img
              src="/images/abt4.png"
              alt="Cocktail grid img 4"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
