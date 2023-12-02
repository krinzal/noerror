'use client';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odit ipsum repellat ullam, reprehenderit ab dignissimos tempora cupiditate enim alias. Nemo fuga iure, sed consequuntur dolores magnam neque ullam voluptatibus?";
export default function Home() {



  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top bottom`,
            end: `top center`,
        },
        opacity: 1,
        ease: "none",
        stagger: 2
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

  return (
    <main ref={container} >
      <div ref={body} className=' opacityscroll flex flex-wrap gap-2 '>
        {
          splitWords(phrase)
        }
      </div>
    </main>
  )
}