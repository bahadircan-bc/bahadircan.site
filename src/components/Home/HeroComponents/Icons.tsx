/// <reference types="vite-plugin-svgr/client" />
import React from "../../../assets/dropdownIcons/react.svg?react";
import Arduino from "../../../assets/dropdownIcons/arduino.svg?react";
import CPlusPlus from "../../../assets/dropdownIcons/cplusplus.svg?react";
import CSharp from "../../../assets/dropdownIcons/csharp.svg?react";
import CSS3 from "../../../assets/dropdownIcons/css3.svg?react";
import Django from "../../../assets/dropdownIcons/django.svg?react";
import Docker from "../../../assets/dropdownIcons/docker.svg?react";
import Expo from "../../../assets/dropdownIcons/expo.svg?react";
import Express from "../../../assets/dropdownIcons/express.svg?react";
import Framer from "../../../assets/dropdownIcons/framer.svg?react";
import Git from "../../../assets/dropdownIcons/git.svg?react";
import Github from "../../../assets/dropdownIcons/github.svg?react";
import GraphQL from "../../../assets/dropdownIcons/graphql.svg?react";
import HTML5 from "../../../assets/dropdownIcons/html5.svg?react";
import JavaScript from "../../../assets/dropdownIcons/javascript.svg?react";
import JSON from "../../../assets/dropdownIcons/json.svg?react";
import Next from "../../../assets/dropdownIcons/next.svg?react";
import Ngrok from "../../../assets/dropdownIcons/ngrok.svg?react";
import Node from "../../../assets/dropdownIcons/node.svg?react";
import OpenCV from "../../../assets/dropdownIcons/opencv.svg?react";
import OpenZeppelin from "../../../assets/dropdownIcons/openzeppelin.svg?react";
import PostgreSQL from "../../../assets/dropdownIcons/postgresql.svg?react";
import Python from "../../../assets/dropdownIcons/python.svg?react";
import QT from "../../../assets/dropdownIcons/qt.svg?react";
import ROS from "../../../assets/dropdownIcons/ros.svg?react";
// import Solidity from "../../../assets/dropdownIcons/solidity.svg?react";
import SQLite from "../../../assets/dropdownIcons/sqlite.svg?react";
import Swift from "../../../assets/dropdownIcons/swift.svg?react";
import TailwindCSS from "../../../assets/dropdownIcons/tailwindcss.svg?react";
import TypeScript from "../../../assets/dropdownIcons/typescript.svg?react";
import Ubuntu from "../../../assets/dropdownIcons/ubuntu.svg?react";
import Unity from "../../../assets/dropdownIcons/unity.svg?react";
import Web3 from "../../../assets/dropdownIcons/web3.svg?react";
import YOLO from "../../../assets/dropdownIcons/yolo.svg?react";

const icons = [
  {
    icon: <React className="w-full h-full fill-[#61DAFB]" />,
    background: "dark",
    link: 'https://react.dev'
  },
  {
    icon: <Arduino className="w-full h-full fill-[#00979D]" />,
    background: "dark",
    link: 'https://www.arduino.cc'
  },
  {
    icon: <CPlusPlus className="w-full h-full fill-[#00599C]" />,
    background: "dark",
    link: 'https://cplusplus.com'
  },
  {
    icon: <CSharp className="w-full h-full fill-[#239120]" />,
    background: "dark",
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
  },
  {
    icon: <CSS3 className="w-full h-full fill-[#1572B6]" />,
    background: "dark",
    link: 'https://www.w3.org/Style/CSS/Overview.en.html'
  },
  {
    icon: <Django className="w-full h-full fill-[#092E20]" />,
    background: "light",
    link: 'https://www.djangoproject.com'
  },
  {
    icon: <Docker className="w-full h-full fill-[#2496ED]" />,
    background: "dark",
    link: 'https://www.docker.com'
  },
  {
    icon: <Expo className="w-full h-full fill-[#000020]" />,
    background: "light",
    link: 'https://expo.dev'
  },
  {
    icon: <Express className="w-full h-full fill-[#000000]" />,
    background: "light",
    link: 'https://expressjs.com'
  },
  {
    icon: <Framer className="w-full h-full fill-[#0055FF]" />,
    background: "light",
    link: 'https://www.framer.com'
  },
  {
    icon: <Git className="w-full h-full fill-[#F05032]" />,
    background: "dark",
    link: 'https://git-scm.com'
  },
  {
    icon: <Github className="w-full h-full fill-[#181717]" />,
    background: "light",
    link: 'https://github.com'
  },
  {
    icon: <GraphQL className="w-full h-full fill-[#E10098]" />,
    background: "dark",
    link: 'https://graphql.org'
  },
  {
    icon: <HTML5 className="w-full h-full fill-[#E34F26]" />,
    background: "dark",
    link: 'https://html.spec.whatwg.org/multipage/'
  },
  {
    icon: <JavaScript className="w-full h-full fill-[#F7DF1E]" />,
    background: "dark",
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    icon: <JSON className="w-full h-full fill-[#000000]" />,
    background: "light",
    link: 'https://www.json.org/json-en.html'
  },
  {
    icon: <Next className="w-full h-full fill-[#000000]" />,
    background: "light",
    link: 'https://nextjs.org'
  },
  {
    icon: <Ngrok className="w-full h-full fill-[#1F1E1E]" />,
    background: "light",
    link: 'https://ngrok.com'
  },
  {
    icon: <Node className="w-full h-full fill-[#339933]" />,
    background: "dark",
    link: 'https://nodejs.org/en/'
  },
  {
    icon: <OpenCV className="w-full h-full fill-[#5C3EE8]" />,
    background: "light",
    link: 'https://opencv.org'
  },
  {
    icon: <OpenZeppelin className="w-full h-full fill-[#4E5EE4]" />,
    background: "light",
    link: 'https://openzeppelin.com'
  },
  {
    icon: <PostgreSQL className="w-full h-full fill-[#336791]" />,
    background: "dark",
    link: 'https://www.postgresql.org'
  },
  {
    icon: <Python className="w-full h-full fill-[#3776AB]" />,
    background: "dark",
    link: 'https://www.python.org'
  },
  {
    icon: <QT className="w-full h-full fill-[#41CD52]" />,
    background: "dark",
    link: 'https://www.qt.io'
  },
  {
    icon: <ROS className="w-full h-full fill-[#22314E]" />,
    background: "dark",
    link: 'https://www.ros.org'
  },
  // {
  //   icon: <Solidity className="w-full h-full fill-[#363636]" />,
  //   background: "light",
  //   link: 'https://docs.soliditylang.org/en/v0.8.6/'
  // },
  {
    icon: <SQLite className="w-full h-full fill-[#003B57]" />,
    background: "dark",
    link: 'https://www.sqlite.org/index.html'
  },
  {
    icon: <Swift className="w-full h-full fill-[#F05138]" />,
    background: "dark",
    link: 'https://swift.org'
  },
  {
    icon: <TailwindCSS className="w-full h-full fill-[#38B2AC]" />,
    background: "dark",
    link: 'https://tailwindcss.com'
  },
  {
    icon: <TypeScript className="w-full h-full fill-[#007ACC]" />,
    background: "dark",
    link: 'https://www.typescriptlang.org'
  },
  {
    icon: <Ubuntu className="w-full h-full fill-[#E95420]" />,
    background: "dark",
    link: 'https://ubuntu.com'
  },
  {
    icon: <Unity className="w-full h-full fill-[#000000]" />,
    background: "light",
    link: 'https://unity.com'
  },
  {
    icon: <Web3 className="w-full h-full fill-[#F16822]" />,
    background: "dark",
    link: 'https://web3js.org'
  },
  {
    icon: <YOLO className="w-full h-full fill-[#000000]" />,
    background: "light",
    link: 'https://pjreddie.com/darknet/yolo/'
  },
];

export default icons;
