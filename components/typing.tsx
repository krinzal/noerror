import React, { useState, MouseEvent } from "react";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";
import { useRouter } from 'next/navigation'

const TerminalController = (props = {}) => {
  const router = useRouter()
  const [colorMode, setColorMode] = useState(ColorMode.Dark);
  const [lineData, setLineData] = useState([
    <TerminalOutput>Welcome to the help terminal!&#128075;</TerminalOutput>,
    <TerminalOutput></TerminalOutput>,
    <TerminalOutput>Please type the following commands:</TerminalOutput>,
    <TerminalOutput>'contact' - navigate to contact page.</TerminalOutput>,
    <TerminalOutput>'projects' - navigate to projects page</TerminalOutput>
  ]);

  function toggleColorMode(e: MouseEvent) {
    e.preventDefault();
    setColorMode(
      colorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light
    );
  }

  function onInput(input: string) {
    let ld = [...lineData];
    ld.push(<TerminalInput>{input}</TerminalInput>);
    if (input.toLocaleLowerCase().trim() === "projects") {
      router.push("projects")
    } else if (input.toLocaleLowerCase().trim() === "contact") {
      router.push("/contact");
    } else if (input.toLocaleLowerCase().trim() === "clear") {
      ld = [];
    } else if (input) {
      ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>);
    }
    setLineData(ld);
  }

  const redBtnClick = () => {
    console.log("Clicked the red button.");
  };

  const yellowBtnClick = () => {
    console.log("Clicked the yellow button.");
  };

  const greenBtnClick = () => {
    console.log("Clicked the green button.");
    toggleColorMode;
  };

  const btnClasses = ["btn"];
  if (colorMode === ColorMode.Light) {
    btnClasses.push("btn-dark");
  } else {
    btnClasses.push("btn-light");
  }
  return (
    <div className="container max-h-[5rem]">
      <div className="d-flex flex-row-reverse p-2 ">
        <button className={btnClasses.join(" ")} onClick={toggleColorMode}>
          {colorMode === ColorMode.Light ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50"
              fill="#72eaff"
            >
              <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 25 15 C 19.484375 15 15 19.484375 15 25 C 15 30.515625 19.484375 35 25 35 C 30.515625 35 35 30.515625 35 25 C 35 19.484375 30.515625 15 25 15 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50"
              fill="#72eaff"
            >
              <path d="M14.02002,1.15997c-0.36005-0.51996-0.98999-0.76996-1.60004-0.62C5.40002,2.26996,0.5,8.53998,0.5,15.78998C0.5,24.45001,7.54999,31.5,16.21002,31.5c7.25,0,13.51996-4.90002,15.25-11.92004c0.14996-0.60999-0.10004-1.23999-0.62-1.59998C30.33002,17.63,29.64001,17.64001,29.13,18c-1.84998,1.31-4.02002,2.01001-6.28003,2.01001c-5.98999,0-10.85999-4.87-10.85999-10.86005C11.98999,6.89001,12.69,4.71997,14,2.87C14.35999,2.35999,14.37,1.66998,14.02002,1.15997z"></path>
            </svg>
          )}
        </button>
      </div>
      <Terminal
        name="www.noerror.studio"
        colorMode={colorMode}
        onInput={onInput}
        redBtnCallback={redBtnClick}
        yellowBtnCallback={yellowBtnClick}
        greenBtnCallback={greenBtnClick}
        height="15rem"
      >
        {lineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
