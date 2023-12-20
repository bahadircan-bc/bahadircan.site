import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";

import React from "@/assets/dropdownIcons/react.svg";
import CPlusPlus from "@/assets/dropdownIcons/cplusplus.svg";
import JavaScript from "@/assets/dropdownIcons/javascript.svg";
import Python from "@/assets/dropdownIcons/python.svg";
import QT from "@/assets/dropdownIcons/qt.svg";
import TypeScript from "@/assets/dropdownIcons/typescript.svg";

function Mobile() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <React className="w-1/3 h-1/3 fill-[#61DAFB]" />
            <p className="text-center">
              React <br />
              Native{" "}
            </p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <CPlusPlus className="w-1/3 h-1/3 fill-[#00599C]" />
            <p>C++</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <JavaScript className="w-1/3 h-1/3 fill-[#F7DF1E]" />
            <p>JavaScript</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Python className="w-1/3 h-1/3 fill-[#3776AB]" />
            <p>Python</p>
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
            <TypeScript className="w-1/3 h-1/3 fill-[#007ACC]" />
            <p>TypeScript</p>
          </div>
        </Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`React Native is an open-source framework developed by Facebook for building cross-platform mobile applications using JavaScript and React. It allows developers to use a single codebase to create native-like mobile apps that can run on both iOS and Android platforms. React Native is important because it enables efficient and cost-effective mobile app development, eliminating the need for separate codebases for each platform. Its "learn once, write anywhere" approach streamlines the development process and accelerates the time-to-market for mobile applications. React Native leverages a component-based architecture, similar to React for web development, making it familiar for developers already experienced with React. Its hot-reloading feature allows for quick development iterations, enhancing the development experience. React Native has been widely adopted for various use cases, including mobile applications for e-commerce, social media, healthcare, and more. Notable apps like Facebook, Instagram, and Airbnb have utilized React Native to provide a consistent and responsive user experience across multiple platforms. The framework's ability to combine the efficiency of web development with the performance of native apps has positioned React Native as a significant player in the mobile app development landscape.`}
          </p>
        </div>
      </SidebarPanel>
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
            {`JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is one of the three core technologies of web development, along with HTML and CSS. JavaScript enables interactive web pages and is an essential part of web applications. It is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
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
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`Qt is a powerful cross-platform C++ library and framework that facilitates the development of graphical user interfaces (GUIs) and cross-platform applications. Developed by The Qt Company, Qt is known for its versatility and user-friendly features, offering a comprehensive set of tools and libraries for creating applications that can run seamlessly on various operating systems, including Windows, Linux, macOS, and mobile platforms. The importance of Qt lies in its ability to streamline the development process, allowing developers to create consistent and visually appealing interfaces across different platforms without the need for significant code modifications. Qt provides a range of modules for handling GUI elements, networking, databases, and more, making it valuable for a wide array of applications. It has been widely used in industries such as automotive for in-vehicle infotainment systems, medical devices for creating user interfaces, and industrial automation for developing control panels. The cross-platform nature of Qt simplifies software development, reducing the effort required to reach a broad user base across diverse operating systems and devices.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-2/3">
            {`TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution. TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries like jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.`}
          </p>
        </div>
      </SidebarPanel>
    </Sidebars>
  );
}

export default Mobile;
