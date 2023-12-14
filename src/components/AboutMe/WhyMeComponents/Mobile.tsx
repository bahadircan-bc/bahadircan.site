import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";

import React from "../../../assets/dropdownIcons/react.svg?react";
import CPlusPlus from "../../../assets/dropdownIcons/cplusplus.svg?react";
import JavaScript from "../../../assets/dropdownIcons/javascript.svg?react";
import Python from "../../../assets/dropdownIcons/python.svg?react";
import QT from "../../../assets/dropdownIcons/qt.svg?react";
import TypeScript from "../../../assets/dropdownIcons/typescript.svg?react";

function Mobile() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <React className="w-1/3 h-1/3 fill-[#61DAFB]" />
            <p className="text-3xl text-center">
              React <br />
              Native{" "}
            </p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <CPlusPlus className="w-1/3 h-1/3 fill-[#00599C]" />
            <p className="text-3xl">C++</p>
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
            <Python className="w-1/3 h-1/3 fill-[#3776AB]" />
            <p className="text-3xl">Python</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <QT className="w-1/3 h-1/3 fill-[#41CD52]" />
            <p className="text-3xl">QT</p>
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

export default Mobile;
