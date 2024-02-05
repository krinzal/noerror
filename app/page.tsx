"use client";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, AsciiRenderer, Float } from "@react-three/drei";
import Navbar from "@/components/navbar";
import Opacityscroll from "@/components/opacityscroll";
import { useEffect, useRef, useLayoutEffect } from "react";
import Model from "@/assets/noerror/Noerror";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Lenis from "@studio-freight/lenis";
import Terminal from "@/components/typing";

import { TerminalContextProvider } from "react-terminal";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);

  useEffect(() => {
    const removeActiveClass = () => {
      const dots = document.querySelectorAll(".balls a");
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
    };

    const addActiveClass = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          removeActiveClass();
          let currentDot = document.querySelector(
            `.balls a[href='#${entry.target.id}']`
          );
          // @ts-ignore
          currentDot.classList.add("active");
        }
      });
    };

    const options = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver(addActiveClass, options);
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup Observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []); // Run effect only once on mount

  return (
    <TerminalContextProvider>
      <main className=" objectthin  max-w-screen flex flex-col gap-0">
        <div className="bg h-screen w-screen fixed" />
        <div className="lines h-screen w-screen fixed" />

        <section id="home" className="h-screen w-screen  py-6 px-10">
          <Navbar />
          <div className=" w-[100%] h-[90%] flex flex-row justify-center items-center">
            <div className="  flex items-center flex-col justify-start solpro gap-4 ">
              <p className="max-sm:hidden absolute verticalcenter verticaltext text-secondarytext text-[0.8rem] uppercase navtext">
                {" "}
                Into the future
              </p>

              <p className="wfont text-primarytext  text-2xl absolute bottom-8 tracking-wide left-0 font-thin">
                <span className="thiccline text-accent tracking-[-1px] pr-4">
                  ——{" "}
                </span>
                01<span className=" opacity-50">/04</span>
              </p>
            </div>

            <div className="    items-center">
              <div className="main z-10">{/* <Terminal/> */}</div>
            </div>

            <div className="max-md:hidden fixed h-full w-full z-[-1]">
              <Canvas camera={{ position: [0, 10, 0], fov: 35 }}>
                <Center>
                  <Float
                    speed={1} // Animation speed, defaults to 1
                    rotationIntensity={1.2} // XYZ rotation intensity, defaults to 1
                    floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                  >
                    <Model scale={[2, 2, 2]} />
                  </Float>
                </Center>
                <ambientLight intensity={1} />
                <directionalLight intensity={1} />
                <AsciiRenderer
                  fgColor="white"
                  bgColor="transparent"
                  resolution={0.3}
                  invert={false}
                />
              </Canvas>
            </div>

            <div className="md:hidden fixed h-full w-full z-[-1] m-0">
              <Canvas
                className="p-0"
                camera={{ position: [0, 10, 0], fov: 35 }}
                dpr={window.devicePixelRatio}
              >
                <Center>
                  <Float
                    speed={1} // Animation speed, defaults to 1
                    rotationIntensity={1.2} // XYZ rotation intensity, defaults to 1
                    floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                  >
                    <Model scale={[2, 2, 2]} />
                  </Float>
                </Center>
                <ambientLight intensity={1} />
                <directionalLight intensity={1} />
                <AsciiRenderer
                  fgColor="white"
                  bgColor="transparent"
                  resolution={0.3}
                  invert={false}
                />
              </Canvas>
            </div>

            <div className="max-md:hidden  indicator fixed flex flex-col gap-8 items-center justify-center right-8">
              <div className="arrowup" />
              <div className="balls flex flex-col items-center gap-4 justify-center ml-0">
                <Link href="#home" className="homeball ball active"></Link>
                <Link href="#about" className="aboutball ball"></Link>
                <Link href="#projects" className="segsball ball"></Link>
              </div>
              <div className="arrowdown" />
            </div>

            <div className="absolute right-12 bottom-8 flex flex-row gap-8 text-secondarytext text-[19px]">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faDiscord} />
            </div>
          </div>
        </section>

        <section
          className="about-section h-screen w-screen flex flex-row items-center justify-end py-6 px-12"
          id="about"
        >
          <div className="max-w-[50%] text-center mr-20">
            <div className="flex flex-row items-center gap-5 justify-center">
              <div className="arrowdown aboutspan" />
              <h1 className="text-primarytext coolfont text-8xl uppercase">
                About
              </h1>
              <div className="arrowdown aboutspan" />
            </div>
            <div className="text-secondarytext solpro font-light">
              <Opacityscroll />
            </div>
          </div>
        </section>

        <section className="h-screen w-screen projects " id="projects">
          <div className="flex items-center justify-end flex-row p-28">
            <div className="max-w-[65%] min-w-[65%]">
              <Terminal />
            </div>
          </div>
        </section>
      </main>
    </TerminalContextProvider>
  );
}
