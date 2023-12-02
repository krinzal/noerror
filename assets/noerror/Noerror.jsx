import gsap from "gsap";

import React, { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export default function Model(props) {
  const { nodes, materials } = useGLTF("/noerror.glb");

  const tl = gsap.timeline();
  const { scene, camera } = useThree();
  useLayoutEffect(() => {
    tl.to(camera.position, {
      x: 2.5,
      y: 10,
      z: 0,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

      .to(scene.rotation, {
        x: -1.5,
        y: 1,
        z: 0,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "top center",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.position, {
        x:0,
        y: 0,
        z: 2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "top center",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.rotation, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top center",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: -0.6,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top center",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

// jlkjhrf

.to(scene.rotation, {
  x: -1.5,
  y: 1,
  z: 0,
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
    end: "top center",
    scrub: true,
    immediateRender: false,
  },
})

.to(scene.position, {
  x:0,
  y: 0,
  z: 0,
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
    end: "top center",
    scrub: true,
    immediateRender: false,
  },
})
.to(scene.rotation, {
  x: 0,
  y: 0,
  z: 0,
  scrollTrigger: {
    trigger: ".projects",
    start: "top center",
    end: "top top",
    scrub: true,
    immediateRender: false,
  },
})
      .to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger:{
          trigger:".projects",
          start:"top center",
          end:"top top",
          scrub:true,
          immediateRender:false
        }
      })


  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.002"]}
        position={[-0.07, 0, 0.36]}
        scale={10}
      />
    </group>
  );
}

useGLTF.preload("/noerror.glb");
