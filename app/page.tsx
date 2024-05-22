"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const ref1 = useRef(null);
  const [inViewRef1, setInViewRef1] = useInView({
    triggerOnce: false,
    initialInView: false,
    threshold: 0.45,
  });
  useGSAP(() => {
    if (setInViewRef1) {
      tl.to(ref1.current, { opacity: 1, duration: 1.5 });
    }
  }, [setInViewRef1]);

  const ref2 = useRef(null);
  const [inViewRef2, setInViewRef2] = useInView({
    triggerOnce: false,
    initialInView: false,
    threshold: 0.45,
  });
  useGSAP(() => {
    if (setInViewRef2) {
      tl.to(ref2.current, { opacity: 1, duration: 1.5 });
    }
  }, [setInViewRef2]);

  const images = [
    { src: "1.png" },
    { src: "2.png" },
    { src: "3.png" },
    { src: "4.png" },
    { src: "5.png" },
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [timer, setTimer] = useState(2500);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, timer);

    return () => clearInterval(interval);
  }, [imageIndex, timer]);

  const tl = gsap.timeline({ delay: 0 });
  const model = useRef(null);
  const footer = useRef(null);

  useEffect(() => {
    const screen = window.innerHeight;
    const yPosition = screen > 800 ? "-29%" : "-10%";
    const scale = screen > 800 ? "0.65" : "0.5";

    (tl.current as any) = gsap.timeline({
      ease: "back.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=650%",
        scrub: true,
        pin: true,
      },
    });

    (tl.current as any).fromTo(
      model.current as any,
      { opacity: 1, y: 0, scale: 1, rotation: 0 },
      { opacity: 1, y: yPosition, scale: scale, rotation: -90 },
      "start"
    );

    (tl.current as any).to(model.current as any, { opacity: 0 }, "+=400%");
  }, []);

  const tl2 = gsap.timeline({ delay: 0 });
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useGSAP(() => {
    (tl2.current as any) = gsap.timeline({
      ease: "back.inOut",
      scrollTrigger: {
        trigger: "#test",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    (tl2.current as any).fromTo(
      ref3.current as any,
      { opacity: 0 },
      { opacity: 1, duration: 20 },
      "start"
    );
    (tl2.current as any).to(
      ref3.current as any,
      { opacity: 0, duration: 20 },
      "+=20"
    );

    (tl2.current as any).fromTo(
      ref4.current as any,
      { opacity: 0 },
      { opacity: 1, duration: 20 }
    );
    (tl2.current as any).to(
      ref4.current as any,
      { opacity: 0, duration: 20 },
      "+=20"
    );

    (tl2.current as any).fromTo(
      ref5.current as any,
      { opacity: 0 },
      { opacity: 1, duration: 20 }
    );
    (tl2.current as any).to(
      ref5.current as any,
      { opacity: 0, duration: 20 },
      "+=20"
    );

    (tl2.current as any).fromTo(
      ref6.current as any,
      { opacity: 0 },
      { opacity: 1, duration: 20 }
    );
    (tl2.current as any).to(
      ref6.current as any,
      { opacity: 0, duration: 20 },
      "+=20"
    );
  }, []);

  return (
    <main>
      <nav>
        <div className="nav">
          <div className="nav-links" style={{ gap: "1rem" }}>
            <img src="logo2.png" style={{ width: "auto", height: "60px" }} />
            <span>teenage engineering</span>
          </div>
          <div className="nav-links" id="links">
            <Link href="">products</Link>
            <Link href="">store</Link>
            <Link href="">now</Link>
            <Link href="">support</Link>
          </div>
        </div>
      </nav>

      <div
        className="background-holder"
        style={{
          display: "flex",
          justifyContent: "center",
          zIndex: "2",
          marginTop: "2rem",
        }}
      >
        <img src="test.png" style={{ maxWidth: "100%" }} ref={model} />
      </div>
      <div
        className="container-holder"
        style={{ zIndex: "0", alignItems: "flex-end" }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
            zIndex: "1",
            width: "100%",
            marginBottom: "4rem",
          }}
        >
          <h1>OP-1 field.</h1>
        </div>
      </div>
      <div className="container-holder">
        <div
          className="container-holder"
          style={{
            background:
              "linear-gradient(to top, rgb(240 240 239), transparent)",
          }}
        ></div>
      </div>

      <div className="container-holder" style={{ alignItems: "flex-start" }}>
        <div
          className="container-holder"
          style={{
            background:
              "linear-gradient(to bottom, rgb(240 240 239) 75%, transparent 100%)",
            position: "absolute",
          }}
          ref={inViewRef1}
        ></div>
        <div
          className="container"
          ref={ref1}
          style={{ opacity: 0, marginTop: "8rem", textAlign: "center" }}
        >
          <h2>the beauty of evolution.</h2>
          <br />
          <br />
          <p>
            introducing the all new OP–1 field. injected with more than a decade
            of ideas, refinements and improvements. just to mention a few:
            stereo throughout the whole signal chain, bluetooth midi, usb
            type-c, a new speaker system with a passive driver for detailed, fat
            and loud sound, a massive 24 hour battery life, multiple tapes and
            recording formats, new great sounding reverb and the
            &apos;dimension&apos; synth engine, an all glass, flush, high
            resolution display. we also meticulously reworked all graphics,
            screen by screen. did we mention fm broadcasting?
          </p>
        </div>
      </div>

      <div
        className="background-holder"
        id="test"
        style={{ position: "relative" }}
      >
        <div
          ref={ref3}
          style={{
            position: "absolute",
            width: "100%",
            top: "15%",
            opacity: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              color: "#070707",
              fontSize: "clamp(24px, 2vw, 28px)",
              textAlign: "center",
            }}
          >
            HARDENED GLASS HIGH RESOLUTION FLUSH DISPLAY WITH ADJUSTABLE
            BRIGHTNESS.
          </span>
        </div>
        <div
          ref={ref4}
          style={{
            position: "absolute",
            width: "100%",
            bottom: "15%",
            opacity: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              color: "#070707",
              fontSize: "clamp(24px, 2vw, 28px)",
              textAlign: "center",
            }}
          >
            IMPROVED DRUM ENVELOPE FOR BETTER TRANSIENT CONTROL
          </span>
        </div>
        <div
          ref={ref5}
          style={{
            position: "absolute",
            width: "100%",
            top: "15%",
            opacity: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              color: "#070707",
              fontSize: "clamp(24px, 2vw, 28px)",
              textAlign: "center",
            }}
          >
            DUAL BLE ANTENNAS FOR STABLE WIRELESS PERFORMANCE
          </span>
        </div>
        <div
          ref={ref6}
          style={{
            position: "absolute",
            width: "100%",
            bottom: "15%",
            opacity: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              color: "#070707",
              fontSize: "clamp(24px, 2vw, 28px)",
              textAlign: "center",
            }}
          >
            IMPROVED EQUALIZER WITH HIGHER RESOLUTION AND SMOOTHER INTERPOLATION
          </span>
        </div>
      </div>

      <div className="container-holder">
        <div
          className="container-holder"
          style={{
            background:
              "linear-gradient(to top, rgb(240 240 239), transparent)",
          }}
        ></div>
      </div>

      <div className="container-holder" style={{ alignItems: "flex-start" }}>
        <div
          className="container-holder"
          style={{
            background:
              "linear-gradient(to bottom, rgb(240 240 239) 75%, transparent 100%)",
            position: "absolute",
          }}
          ref={inViewRef2}
        ></div>
        <div
          className="container"
          ref={ref2}
          style={{ opacity: 0, marginTop: "8rem", textAlign: "center" }}
        >
          <h2>louder, thinner and 100 times better.</h2>
          <br />
          <br />
          <p>
            think of OP–1 field as the natural continuation of its predecessor.
            updated with the latest technology, improved design and finely tuned
            with professional musicians, recording artists and sound designers
            in mind. higher quality in all aspects, from its circuitry to
            connectivity and flexibility, it&apos;s tailor made for
            professionals in the field.
          </p>
        </div>
      </div>

      <div className="container-holder" style={{ flexDirection: "column" }}>
        <img src={images[imageIndex].src} className="splash-bottom" />
        <div className="splash-id-holder">
          <div className="splash-id-container">
            <div
              className="splash-id"
              onClick={() => {
                setImageIndex(0);
                setTimer(2500);
              }}
              style={{
                opacity: imageIndex == 0 ? "1" : " ",
                scale: imageIndex == 0 ? "1.6" : " ",
              }}
            ></div>
            <div
              className="splash-id"
              onClick={() => {
                setImageIndex(1);
                setTimer(2500);
              }}
              style={{
                opacity: imageIndex == 1 ? "1" : " ",
                scale: imageIndex == 1 ? "1.6" : " ",
              }}
            ></div>
            <div
              className="splash-id"
              onClick={() => {
                setImageIndex(2);
                setTimer(2500);
              }}
              style={{
                opacity: imageIndex == 2 ? "1" : " ",
                scale: imageIndex == 2 ? "1.6" : " ",
              }}
            ></div>
            <div
              className="splash-id"
              onClick={() => {
                setImageIndex(3);
                setTimer(2500);
              }}
              style={{
                opacity: imageIndex == 3 ? "1" : " ",
                scale: imageIndex == 3 ? "1.6" : " ",
              }}
            ></div>
            <div
              className="splash-id"
              onClick={() => setImageIndex(4)}
              style={{
                opacity: imageIndex == 4 ? "1" : " ",
                scale: imageIndex == 4 ? "1.6" : " ",
              }}
            ></div>
          </div>
        </div>
        <div className="description">
          <h2 style={{ color: "#070707" }}>OP–1</h2>
          <span style={{ color: "#070707" }}>$1999 ships from the U.S.</span>
          <br />
          <br />
          <Link href="">
            <span style={{ fontWeight: "400", color: "rgb(0, 113, 187)" }}>
              available now. visit store
            </span>
          </Link>
        </div>
      </div>

      {/* <footer>
        <div className="nav">
          <span>©2024 teenage engineering</span>
          <div className="nav-links">
            <Link href="">newsletter</Link>
            <Link href="">stores</Link>
            <Link href="">privacy</Link>
            <Link href="">terms and conditions</Link>
            <Link href="">press</Link>
            <Link href="">contact</Link>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
