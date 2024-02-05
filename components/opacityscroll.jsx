'use client';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "We are a service that provides a vast variety of Websites and Discord Bots which are developed and nourished by our team along with a few other different projects. Unlike other bot shops, we develop Discord Bots and Websites according to the taste of our customers. You name them and we got it. Customer satisfaction is our main priority.Apart from bot orders, we also provide free open source projects on our YouTube channel.So why not get a bot today? Not to someone else's choice but yours! Not someone else's needs but yours! Get it today! Make your imaginations comes to life with NoError Studios!";
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