import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";

import Arduino from "@/assets/dropdownIcons/arduino.svg";
import CPlusPlus from "@/assets/dropdownIcons/cplusplus.svg";
import CSharp from "@/assets/dropdownIcons/csharp.svg";
import OpenCV from "@/assets/dropdownIcons/opencv.svg";
import Python from "@/assets/dropdownIcons/python.svg";
import ROS from "@/assets/dropdownIcons/ros.svg";
import Ubuntu from "@/assets/dropdownIcons/ubuntu.svg";
import YOLO from "@/assets/dropdownIcons/yolo.svg";

function Engineering() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Arduino className="w-1/3 h-1/3 fill-[#00979D]" />
            <p className="text-3xl">Arduino</p>
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
            <CSharp className="w-1/3 h-1/3 fill-[#239120]" />
            <p className="text-3xl">C#</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <OpenCV className="w-1/3 h-1/3 fill-[#5C3EE8]" />
            <p className="text-3xl">OpenCV</p>
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
            <ROS className="w-1/3 h-1/3 fill-[#22314E]" />
            <p className="text-3xl">ROS</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Ubuntu className="w-1/3 h-1/3 fill-[#E95420]" />
            <p className="text-3xl">Ubuntu</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <YOLO className="w-1/3 h-1/3 fill-[#000000]" />
            <p className="text-3xl">YOLO</p>
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

export default Engineering;