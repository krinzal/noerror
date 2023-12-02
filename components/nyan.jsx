import React, { useEffect } from 'react';

const NyanCat = () => {
  console.log('Nyan!');

  function cycleFrames(_nyanCat, _currentFrame) {
    _nyanCat.classList = [];
    _nyanCat.classList.add(`frame${_currentFrame}`);
  }

  function replicateSparks(_sparksRow) {
    const numberOfRowsToCoverEntireScreen = Math.ceil(window.innerHeight / _sparksRow.offsetHeight);
    const newSparksRows = document.createElement('div');

    for (let a = 0; a < numberOfRowsToCoverEntireScreen - 1; a++) {
      newSparksRows.append(_sparksRow.cloneNode(true));
    }

    document.body.prepend(newSparksRows);
  }

  useEffect(() => {
    let nyanCat = document.getElementById('nyan-cat');
    let currentFrame = 1;


    const intervalId = setInterval(() => {
      currentFrame = (currentFrame % 6) + 1;
      cycleFrames(nyanCat, currentFrame);
    }, 70);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <div>

{/* 
      <div id="wave-a" className="hot rainbow"></div>
      <div id="wave-a" className="cold rainbow"></div>

      <div id="wave-b" className="hot rainbow"></div>
      <div id="wave-b" className="cold rainbow"></div> */}

      <div id="nyan-cat" className="frame1">
        <div id="tail"></div>

        <div id="paws"></div>

        <div id="pop-tarts-body">
          <div id="pop-tarts-body-cream"></div>
        </div>

        <div id="head">
          <div id="face"></div>
        </div>
      </div>
    </div>
  );
};

export default NyanCat;
