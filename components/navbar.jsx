"use client"

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import Burger from '@/components/header/burger/index'
import { AnimatePresence } from 'framer-motion';
import Stairs from '@/components/header/stairs/index'

import Menu from '@/components/header/menu/index'
const Navbar = () => {


  const [menuIsOpen, setMenuIsOpen] = useState(false);


  return (
    <div className="w-full h-auto flex flex-row items-center justify-between">
      {/* Logo on the left */}
      <h1 className="coolfont text-primarytext text-3xl uppercase">Noerror</h1>
      <div>

<Burger openMenu={() => {setMenuIsOpen(true)}}/>

<AnimatePresence mode="wait">

{

    menuIsOpen && <>

    <Stairs />

    <Menu closeMenu={() => {setMenuIsOpen(false)}}/>

    </>

}

</AnimatePresence>

</div>
    </div>
  );
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="auto"
      height="auto"
      fill="#9bafc2"
    >
      <path d="M51 46c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 46 50.399 46 51 46zM51 30c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 30 50.399 30 51 30zM51 14c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 14 50.399 14 51 14z" />
    </svg>
  );
};

export default Navbar;
