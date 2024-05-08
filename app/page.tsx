"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    (tl.current as any) = gsap.timeline({
      ease: "back.inOut",
      scrollTrigger: {
        // trigger: ".main",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    (tl.current as any).fromTo(
      model.current as any,
      { opacity: 1, y: 0, scale: 1 },
      { opacity: 0.8, y: "-20vh", scale: 0.45 },
      "start"
    );
  }, []);

  return (
    <main>
      <nav>
        <div className="nav">
          <div className="nav-links" style={{ gap: "1rem" }}>
            <img src="logo.png" style={{ width: "auto", height: "40px" }} />
            <span style={{ fontWeight: "300" }}>teenage engineering</span>
          </div>
          <div className="nav-links">
            <Link href="">products</Link>
            <Link href="">store</Link>
            <Link href="">now</Link>
            <Link href="">support</Link>
          </div>
        </div>
      </nav>
      <div className="background-holder" ref={model}>
        <img src={images[imageIndex].src} className="splash" />
      </div>

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

      <div className="container-holder"></div>

      <div className="container-holder">
        <div className="container" id="fade">
          <h2>the beauty of evolution.</h2>
          <br />
          <br />
          <span>
            introducing the all new OP–1 field. injected with more than a decade
            of ideas, refinements and improvements. just to mention a few:
            stereo throughout the whole signal chain, bluetooth midi, usb
            type-c, a new speaker system with a passive driver for detailed, fat
            and loud sound, a massive 24 hour battery life, multiple tapes and
            recording formats, new great sounding reverb and the 'dimension'
            synth engine, an all glass, flush, high resolution display. we also
            meticulously reworked all graphics, screen by screen. did we mention
            fm broadcasting?
          </span>
        </div>
      </div>

      <div className="container-holder">
        <div className="container" id="fade">
          <h2>louder, thinner and 100 times better.</h2>
          <br />
          <br />
          <span>
            think of OP–1 field as the natural continuation of its predecessor.
            updated with the latest technology, improved design and finely tuned
            with professional musicians, recording artists and sound designers
            in mind. higher quality in all aspects, from its circuitry to
            connectivity and flexibility, it's tailor made for professionals in
            the field.
          </span>
        </div>
      </div>

      <div className="container-holder" style={{ paddingTop: "28rem" }}>
        <div
          className="container"
          id="fade"
          // style={{ textAlign: "left" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <h1>OP–1</h1>
            {/* <p>$1999 ships from the U.S.</p> */}
          </div>
          <br />
          <Link href="">
            <span style={{ fontWeight: "400", color: "rgb(0, 113, 187)" }}>
              available now. visit store
            </span>
          </Link>
          {/* <span>
            OP–1 field is our all-in-one battery-powered synthesizer, sampler
            and drum machine. OP–1 field is packed with features including: a
            built-in speaker, microphone, multiple effects, vocoder, fm radio,
            bluetooth midi, even a velocity sensitive keyboard. it's the most
            powerful portable synthesizer available.
          </span>
          <br />
          <br />
          <ul>
            <li>12 synth engines</li>
            <li>sampler, drum machine and sequencer</li>
            <li>tape recorder</li>
            <li>built in effects</li>
            <li>ultra-portable</li>
            <li>dimensions: 28.8 cm x 10.2 cm x 2.9 cm</li>
            <li>weight: 589 g / 20.8 oz</li>
          </ul>
          <br />

          <div style={{ textAlign: "right" }}>
            <button className="cart-btn">add to cart</button>
          </div> */}
        </div>
      </div>

      <footer>
        <div className="nav">
          <p>©2024 teenage engineering</p>
          <div className="nav-links">
            <Link href="">newsletter</Link>
            <Link href="">stores</Link>
            <Link href="">privacy</Link>
            <Link href="">terms and conditions</Link>
            <Link href="">press</Link>
            <Link href="">contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
