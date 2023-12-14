import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";
import ReactIcon from "../../../assets/dropdownIcons/react.svg?react";
import React from "../../../assets/dropdownIcons/react.svg?react";
import CSS3 from "../../../assets/dropdownIcons/css3.svg?react";
import Docker from "../../../assets/dropdownIcons/docker.svg?react";
import Django from "../../../assets/dropdownIcons/django.svg?react";
import Express from "../../../assets/dropdownIcons/express.svg?react";
import Framer from "../../../assets/dropdownIcons/framer.svg?react";
import HTML5 from "../../../assets/dropdownIcons/html5.svg?react";
import GraphQL from "../../../assets/dropdownIcons/graphql.svg?react";
import JavaScript from "../../../assets/dropdownIcons/javascript.svg?react";
import JSON from "../../../assets/dropdownIcons/json.svg?react";
import Next from "../../../assets/dropdownIcons/next.svg?react";
import Ngrok from "../../../assets/dropdownIcons/ngrok.svg?react";
import Node from "../../../assets/dropdownIcons/node.svg?react";
import PostgreSQL from "../../../assets/dropdownIcons/postgresql.svg?react";
import Python from "../../../assets/dropdownIcons/python.svg?react";
import SQLite from "../../../assets/dropdownIcons/sqlite.svg?react";
import TailwindCSS from "../../../assets/dropdownIcons/tailwindcss.svg?react";
import TypeScript from "../../../assets/dropdownIcons/typescript.svg?react";

function Web() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <ReactIcon className="w-1/3 h-1/3 fill-[#61DAFB]" />
            <p className="text-3xl">React</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <CSS3 className="w-1/3 h-1/3 fill-[#1572B6]" />
            <p className="text-3xl">CSS3</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Docker className="w-1/3 h-1/3 fill-[#2496ED]" />
            <p className="text-3xl">Docker</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Django className="w-1/3 h-1/3 fill-[#092E20]" />
            <p className="text-3xl">Django</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Express className="w-1/3 h-1/3 fill-[#000000]" />
            <p className="text-3xl">Express</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Framer className="w-1/3 h-1/3 fill-[#0055FF]" />
            <p className="text-3xl">Framer</p>
          </div>
        </Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="h-full">hello world</div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full">hello</div>
      </SidebarPanel>
    </Sidebars>
  );
}

export default Web;
