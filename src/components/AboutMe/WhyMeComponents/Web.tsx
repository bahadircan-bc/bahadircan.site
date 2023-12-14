import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";
import React from "../../../assets/dropdownIcons/react.svg?react";
import CSS3 from "../../../assets/dropdownIcons/css3.svg?react";
import Docker from "../../../assets/dropdownIcons/docker.svg?react";
import Django from "../../../assets/dropdownIcons/django.svg?react";
import Express from "../../../assets/dropdownIcons/express.svg?react";
import Framer from "../../../assets/dropdownIcons/framer.svg?react";
import HTML5 from "../../../assets/dropdownIcons/html5.svg?react";
import GraphQL from "../../../assets/dropdownIcons/graphql.svg?react";
import JavaScript from "../../../assets/dropdownIcons/javascript.svg?react";
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
            <React className="w-1/3 h-1/3 fill-[#61DAFB]" />
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
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <HTML5 className="w-1/3 h-1/3 fill-[#E34F26]" />
            <p className="text-3xl">HTML5</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <GraphQL className="w-1/3 h-1/3 fill-[#E10098]" />
            <p className="text-3xl">GraphQL</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <JavaScript className="w-1/3 h-1/3 fill-[#F7DF1E]" />
            <p className="text-3xl">JavaScript</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Next className="w-1/3 h-1/3 fill-[#000000]" />
            <p className="text-3xl">Next</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Ngrok className="w-1/3 h-1/3 fill-[#1F1E1E]" />
            <p className="text-3xl">Ngrok</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Node className="w-1/3 h-1/3 fill-[#339933]" />
            <p className="text-3xl">Node</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <PostgreSQL className="w-1/3 h-1/3 fill-[#336791]" />
            <p className="text-3xl">PostgreSQL</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Python className="w-1/3 h-1/3 fill-[#3776AB]" />
            <p className="text-3xl">Python</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <SQLite className="w-1/3 h-1/3 fill-[#003B57]" />
            <p className="text-3xl">SQLite</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <TailwindCSS className="w-1/3 h-1/3 fill-[#38B2AC]" />
            <p className="text-3xl">TailwindCSS</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <TypeScript className="w-1/3 h-1/3 fill-[#007ACC]" />
            <p className="text-3xl">TypeScript</p>
          </div>
        </Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="h-full text-center flex items-center justify-center">
          <p className="w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            suscipit illum nemo eveniet dicta labore facere, nam ipsam. Modi
            repellat voluptatibus veritatis placeat doloribus voluptates!
            Facilis mollitia laboriosam suscipit debitis! Esse perspiciatis,
            doloremque autem rem eligendi aperiam adipisci nisi assumenda fuga
            vel quisquam unde cupiditate ab harum ipsum quam soluta omnis in
            facilis commodi voluptatum! Deleniti voluptas repellat non
            quibusdam? Iste, eligendi voluptatum, animi laudantium sequi cum ad
            aliquam alias id laboriosam, explicabo esse quis vitae autem omnis
            ex quas. Magni praesentium similique quis maxime soluta, quam
            dolores ad exercitationem.
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full">hello</div>
      </SidebarPanel>
    </Sidebars>
  );
}

export default Web;
