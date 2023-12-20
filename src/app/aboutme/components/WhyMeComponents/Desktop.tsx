import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";

import CPlusPlus from "@/assets/dropdownIcons/cplusplus.svg";
import CSharp from "@/assets/dropdownIcons/csharp.svg";
import QT from "@/assets/dropdownIcons/qt.svg";
import Unity from "@/assets/dropdownIcons/unity.svg";
import Python from "@/assets/dropdownIcons/python.svg";

function Desktop() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <CPlusPlus className="w-1/3 h-1/3 fill-[#00599C]" />
            <p>C++</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <CSharp className="w-1/3 h-1/3 fill-[#239120]" />
            <p>C#</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <QT className="w-1/3 h-1/3 fill-[#41CD52]" />
            <p>QT</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Unity className="w-1/3 h-1/3 fill-[#000000]" />
            <p>Unity</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Python className="w-1/3 h-1/3 fill-[#3776AB]" />
            <p>Python</p>
          </div>
        </Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`C++ is a general-purpose programming language that supports procedural, object-oriented, and generic programming. It is an extension of the C programming language, with additional features such as classes, templates, and exceptions. C++ is one of the most popular programming languages, with a wide range of applications in various domains. It is used to develop operating systems, browsers, games, and embedded systems. Its importance lies in its efficiency, speed, and versatility, making it a powerful tool for developers to create robust and scalable software.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`C# is a general-purpose, multi-paradigm programming language developed by Microsoft. It is a simple, modern, and object-oriented language that is based on C and C++. C# is used to build a variety of applications, including desktop applications, web applications, mobile applications, and games. Its importance lies in its versatility, allowing developers to create robust and scalable software for a wide range of platforms and devices.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`Qt is a powerful cross-platform C++ library and framework that facilitates the development of graphical user interfaces (GUIs) and cross-platform applications. Developed by The Qt Company, Qt is known for its versatility and user-friendly features, offering a comprehensive set of tools and libraries for creating applications that can run seamlessly on various operating systems, including Windows, Linux, macOS, and mobile platforms. The importance of Qt lies in its ability to streamline the development process, allowing developers to create consistent and visually appealing interfaces across different platforms without the need for significant code modifications. Qt provides a range of modules for handling GUI elements, networking, databases, and more, making it valuable for a wide array of applications. It has been widely used in industries such as automotive for in-vehicle infotainment systems, medical devices for creating user interfaces, and industrial automation for developing control panels. The cross-platform nature of Qt simplifies software development, reducing the effort required to reach a broad user base across diverse operating systems and devices.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`Unity is a popular cross-platform game development engine that allows developers to create interactive 2D, 3D, augmented reality (AR), and virtual reality (VR) experiences. Developed by Unity Technologies, Unity has become a cornerstone in the gaming and simulation industries. Its importance stems from its user-friendly interface, extensive asset store, and robust capabilities for creating visually compelling and immersive applications across various platforms, including desktop, mobile, and consoles. Unity's versatility extends beyond gaming, with applications in architectural visualization, education, training simulations, and film production. It simplifies the game development process by providing a rich set of tools for designing scenes, handling physics, and implementing complex game mechanics. Unity's cross-platform compatibility is crucial for developers aiming to reach a broad audience, and its support for emerging technologies like AR and VR has positioned it as a key player in the evolving landscape of interactive content creation. Whether used by indie game developers or large studios, Unity plays a pivotal role in democratizing access to game development and fostering innovation in the creation of interactive experiences.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`Python is a high-level, general-purpose programming language. It is an interpreted language, with a design philosophy that emphasizes code readability and a syntax that allows programmers to express concepts in fewer lines of code than would be possible in languages such as C++ or Java. Python is used in various domains, from web development to machine learning. Its importance lies in its simplicity, versatility, and efficiency, making it a powerful tool for developers to create robust and scalable software.`}
          </p>
        </div>
      </SidebarPanel>
    </Sidebars>
  );
}

export default Desktop;
