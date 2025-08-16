import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // Split the title text into characters and words
    const heroSplit = new SplitText(".title", { type: "chars, words" });

    // Split the subtitle into separate lines
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    // Animate each character of the title (from bottom to normal position)
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06, // each char comes one after another
    });

    // Animate subtitle lines (fade in + move up)
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1, // starts after title animation
    });

    // Parallax effect on leaves + arrow when scrolling
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true, // sync animation with scroll
        },
      })
      .to(".right-leaf", { y: 200 }, 0) // move leaf down
      .to(".left-leaf", { y: -200 }, 0) // move leaf up
      .to(".arrow", { y: 100 }, 0); // move arrow down

    // Different scroll trigger values for mobile vs desktop
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    // Timeline for video scroll animation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true, // keep video fixed while scrolling
      },
    });

    // Animate video once metadata is loaded
    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration, // play video as scroll progresses
          ease: "none",
        },
        0
      )

        // Scale down video (zoom out) while scrolling
        .fromTo(
          videoRef.current,
          { scale: 1.7 }, // start zoomed in
          { scale: 1.3, ease: "power2.out" }, // shrink smoothly
          0
        );
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
