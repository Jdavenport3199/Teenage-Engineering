"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import { ReactLenis } from "lenis/react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const ref1 = useRef(null);
  const [inViewRef1, setInViewRef1] = useInView({
    triggerOnce: false,
    initialInView: false,
    threshold: 0.1,
  });

  const ref2 = useRef(null);
  const [inViewRef2, setInViewRef2] = useInView({
    triggerOnce: false,
    initialInView: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (setInViewRef1) {
      tl.to(ref1.current, { opacity: 1, duration: 1.5, ease: "power2.inOut" });
    }
    if (setInViewRef2) {
      tl.to(ref2.current, { opacity: 1, duration: 1.5, ease: "power2.inOut" });
    }
  }, [setInViewRef1, setInViewRef2]);

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

  useEffect(() => {
    const screen = window.innerHeight;
    const elementHeight = (model.current as any)?.offsetHeight || 0;
    const yPositionTop = screen > 800 ? 200 : 250;
    const yPosition = (screen - elementHeight) / 2;
    const scale = screen > 800 ? "0.65" : "0.45";

    (tl.current as any) = gsap.timeline({
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        endTrigger: "#stop",
        end: "bottom bottom",
        scrub: true,
        pin: "#image",
        anticipatePin: 1,
      },
    });

    (tl.current as any).fromTo(
      model.current as any,
      { opacity: 1, y: yPositionTop, scale: 1, rotation: 0 },
      { opacity: 1, y: yPosition, scale: scale, rotation: -90 },
      "start"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <main>
        <nav>
          <div className="nav">
            <div className="nav-links" style={{ gap: "1rem" }}>
              <img src="logo2.png" style={{ width: "auto", height: "60px" }} />
            </div>
            <div className="nav-links" id="links">
              <button>products</button>
              <button>store</button>
              <button>now</button>
              <button>support</button>
            </div>
          </div>
        </nav>

        <div
          className="background-holder"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
          id="image"
        >
          <img src="test.png" style={{ maxWidth: "100%" }} ref={model} />
        </div>
        <div
          className="container-holder"
          style={{
            zIndex: "0",
            alignItems: "flex-start",
            background: "linear-gradient(to top, rgb(245 245 245), #caccce)",
            minHeight: "300vh",
          }}
          id="stop"
        >
          <div
            className="container"
            style={{
              textAlign: "center",
              width: "100%",
              marginTop: "16rem",
            }}
          >
            <h1>OP-1 field.</h1>
          </div>
        </div>

        <div className="container-holder" ref={inViewRef1}>
          <div className="container" ref={ref1} style={{ opacity: 0 }}>
            <h1>the beauty of evolution.</h1>
            <br />
            <br />
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "2rem 4rem" }}
            >
              <p style={{ flex: "1 1 45%" }}>
                introducing the all new OP–1 field. injected with more than a
                decade of ideas, refinements and improvements. just to mention a
                few: stereo throughout the whole signal chain, bluetooth midi,
                usb type-c, a new speaker system with a passive driver for
                detailed, fat and loud sound, a massive 24 hour battery life,
                multiple tapes and recording formats, new great sounding reverb
                and the &apos;dimension&apos; synth engine, an all glass, flush,
                high resolution display.
              </p>
              <p style={{ flex: "1 1 45%" }}>
                we also meticulously reworked all graphics, screen by screen.
                did we mention fm broadcasting? we didn&apos;t want to alter the
                original OP–1 too much, because we think we got it more or less
                right the first time; but by lowering the aluminum body around
                the keyboard, the new OP–1 field feels lighter, thinner and more
                precise. with 2k molding we also managed to fit a dual 2.4 GHz
                antenna system inside the aluminum body. well, that&apos;s just
                some of the 100 new features:
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem 4rem",
                marginTop: "2rem",
              }}
            >
              <ul style={{ flex: "1 1 45%" }}>
                <li>ALL NEW LOW PROFILE ALUMINUM BODY</li>
                <li>HIGH RESOLUTION FLUSH DISPLAY</li>
                <li>INTERNAL FM ANTENNA FOR BOTH RX AND TX</li>
                <li>EIGHT SWAPPABLE TAPES FOR RECORDING</li>
                <li>FOUR DIFFERENT TAPE STYLES</li>
                <li>ALL NEW DRUM KIT PACKS</li>
                <li>NEW REVERB EFFECT: MOTHER</li>
                <li>NEW SYNTH ENGINE: DIMENSION</li>
                <li>NEW SPEAKER WITH PASSIVE RADIATOR</li>
                <li>MFI - IPHONE USB MIDI AND AUDIO CONNECTIVITY</li>
                <li>BATTERY LIFE INCREASED TO 24H</li>
                <li>SLIMMER AND SLEEKER PROFILE</li>
                <li>NEW COLOR SCHEME</li>
                <li>DUAL VELCRO® BACK FASTENERS</li>
                <li>TWENTY NEW PRESET SYNTH PATCHES</li>
                <li>ZOOMED IN SAMPLE EDITING</li>
                <li>BLUETOOTH LOW ENERGY FOR WIRELESS MIDI</li>
                <li>PRO QUALITY 32-BIT AUDIO THROUGHOUT THE SIGNAL CHAIN</li>
                <li>
                  STEREO MIXDOWN FROM SYNTH AND DRUM TO STEREO TAPE TRACKS
                </li>
                <li>STEREO DRUM SAMPLER ENGINE</li>
                <li>IMPROVED DRUM ENVELOPE FOR BETTER TRANSIENT CONTROL</li>
                <li>DRUM SAMPLE STACKING</li>
                <li>STEREO AUDIO INPUT PROCESSING</li>
                <li>IMPROVED TAPE LOOPING</li>
                <li>STEREO SYNTH SAMPLER ENGINE</li>
                <li>OVER 160 MINUTES OF SAMPLE STORAGE</li>
                <li>4-POLE AUDIO JACK FOR HEADSET MIC SUPPORT</li>
                <li>CONFIGURABLE MIDI FILTERING</li>
                <li>NEW VOLUME SETTING PER PATCH</li>
                <li>AFTERBURNER GROUND LOOP NOISE SUPPRESSOR</li>
                <li>BUILT-IN USER GUIDE</li>
                <li>DUAL BLE ANTENNAS FOR STABLE WIRELESS PERFORMANCE</li>
                <li>NEW AND IMPROVED BUILT-IN MICROPHONE</li>
                <li>ADDED ENCODER CLICK FUNCTIONALITY</li>
                <li>TAPE NAME EDITOR</li>
                <li>NEW EXTERNAL VELOCITY LFO</li>
                <li>NEW RANGE OF CUSTOM ACCESSORIES</li>
                <li>UP TO 500 USER PATCHES</li>
                <li>ADJUSTABLE PITCH BEND RANGE</li>
                <li>AUTOMATIC HEADPHONE IMPEDANCE ADJUSTMENT</li>
                <li>BLE ADVERTISING TOGGLE</li>
                <li>BLE CENTRAL FOR CONNECTING CONTROLLERS</li>
                <li>BLE CONNECTION LIST VIEW</li>
                <li>BUILT-IN FM RADIO TRANSMISSION</li>
                <li>CHARGE POWER STATUS LEDS</li>
                <li>CLICK TO HOLD SEQUENCER</li>
                <li>COMPLETELY REWORKED UI</li>
                <li>CUSTOM MIDI SETTINGS FOR CONNECTED DEVICES</li>
                <li>CUSTOM VOLUME ENCODER WITH HIGHER RESOLUTION</li>
                <li>DETAILED COUNTRY SETTINGS FOR RADIO</li>
              </ul>
              <ul style={{ flex: "1 1 45%" }}>
                <li>DUAL ROLE USB TYPE C CONNECTOR</li>
                <li>ERGONOMIC POWER SWITCH</li>
                <li>ULTRA-FIDELITY HEADPHONE OUTPUT</li>
                <li>HIGH RESOLUTION ACCELEROMETER</li>
                <li>IMPROVED AVERAGING FOR A MORE RELIABLE TAP TEMPO</li>
                <li>
                  IMPROVED EQUALIZER WITH HIGHER RESOLUTION AND SMOOTHER
                  INTERPOLATION
                </li>
                <li>HIGHER INPUT SIGNAL GAIN RESOLUTION</li>
                <li>IMPROVED INPUT SIGNAL TO LFO WITH SMOOTHER ENVELOPE</li>
                <li>REFINED ORIGINAL PATCHES</li>
                <li>INCREASE TO 256 MB INTERNAL MEMORY</li>
                <li>IMPROVED ENVELOPE FOLLOW IN NITRO EFFECT</li>
                <li>MORE RANDOM LFO TARGET PARAMETERS</li>
                <li>INCREASED TOMBOLA SIMULATION ACCURACY</li>
                <li>MTP CONTENT MANAGEMENT</li>
                <li>NEW CUSTOM USB CABLE</li>
                <li>NEW FACTORY SEQUENCER PRESETS</li>
                <li>NEW FONT</li>
                <li>NEW FORM FACTOR</li>
                <li>NEW HIGH RESOLUTION VU LED METER</li>
                <li>NEW HOLD SEQUENCER</li>
                <li>NEW KEYBOARD MODULE</li>
                <li>IMPROVED LINE IN SIGNAL QUALITY</li>
                <li>NEW METRONOME SOUND</li>
                <li>NEW PACKAGING</li>
                <li>NEW PAN LFO TARGET</li>
                <li>NEW SAWTOOTH AND SQUARE LFO SHAPES</li>
                <li>NEW SKETCH IMAGE</li>
                <li>OB–4 COMPATIBLE USING FM TX OR WIRE</li>
                <li>POP-UP INFO GRAPHICS</li>
                <li>PRECISE MASTER LEVEL METERS</li>
                <li>PRINTED MANUAL INCLUDED</li>
                <li>QR CODE GUIDE LINK</li>
                <li>REFINED ACOUSTIC SIDE SHOOTING LOUDSPEAKER GRILL</li>
                <li>SAVE TEMPO AND SYNC SETTINGS WITH TAPES</li>
                <li>SCREEN BRIGHTNESS CONTROL</li>
                <li>SMOOTH KNOB INTERPOLATION</li>
                <li>STEREO CLUSTER SYNTH ENGINE</li>
                <li>STEREO DIGITAL SYNTH ENGINE</li>
                <li>STEREO FM SYNTH ENGINE</li>
                <li>STEREO PHASE SYNTH ENGINE</li>
                <li>STEREO PULSE SYNTH ENGINE</li>
                <li>STEREO STRING SYNTH ENGINE</li>
                <li>STEREO TAPE TRACKS</li>
                <li>STEREO VOLTAGE SYNTH ENGINE</li>
                <li>SYSTEM SETTINGS</li>
                <li>USB AUDIO HOST</li>
                <li>
                  USB AUDIO/MIDI DIRECT CONNECTIVITY TO OP–Z, TX–6, OP–1 AND
                  COMPATIBLE DEVICES
                </li>
                <li>USB MIDI HOST</li>
                <li>USER PATCH RENAME</li>
                <li>WIRELESS MIDI CONNECTIVITY TO OP–Z AND TX–6</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-holder">
          <img
            src="test2.webp"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </div>

        <div
          className="container-holder"
          style={{
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <img src={images[imageIndex].src} className="splash" />
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
        </div>

        <div
          className="container-holder"
          ref={inViewRef2}
          style={{
            background: "linear-gradient(to bottom, rgb(245 245 245), #caccce)",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="container" ref={ref2} style={{ opacity: 0 }}>
            <h1>louder, thinner and 100 times better.</h1>
            <br />
            <br />
            <p>
              think of OP–1 field as the natural continuation of its
              predecessor. updated with the latest technology, improved design
              and finely tuned with professional musicians, recording artists
              and sound designers in mind. higher quality in all aspects, from
              its circuitry to connectivity and flexibility, it&apos;s tailor
              made for professionals in the field. we added two soft velcro
              rings on the back for fastening covers and accessories. perhaps
              you want to stick your OP–1 field on top of your full size
              keyboard or slap it on a guitar? use the included adhesive looped
              back and start experimenting. on the right you&apos;ll find an
              additional passive loudspeaker for hugely improved bass. and for a
              ’no-more-cold-metal-on-your-lap’ experience, we enfolded the
              aluminum body in a warm, soft touch, hard cover.
            </p>
          </div>

          <div className="description">
            <h1>OP–1</h1>
            <span>$1999 ships from the U.S.</span>
            <br />
            <br />
            <Link href="">
              <span style={{ fontWeight: "400", color: "rgb(0, 113, 187)" }}>
                available now. visit store
              </span>
            </Link>
          </div>
        </div>

        <div
          className="container-holder"
          style={{
            alignItems: "flex-end",
            minHeight: "fit-content",
          }}
        >
          <img
            src="test3.webp"
            style={{ width: "100%", height: "60vh", objectFit: "cover" }}
          />
        </div>

        <footer>
          <div
            className="nav"
            style={{ flexWrap: "wrap-reverse", gap: "1rem 4rem", width: "90%" }}
          >
            <span>©2024 teenage engineering</span>
            <div className="nav-links" style={{ flexWrap: "wrap" }}>
              <button>stores</button>
              <button>privacy</button>
              <button>terms and conditions</button>
              <button>contact</button>
            </div>
          </div>
        </footer>
      </main>
    </ReactLenis>
  );
}
