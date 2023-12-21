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
            <p>Arduino</p>
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
            <CSharp className="w-1/3 h-1/3 fill-[#239120]" />
            <p>C#</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <OpenCV className="w-1/3 h-1/3 fill-[#5C3EE8]" />
            <p>OpenCV</p>
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
            <ROS className="w-1/3 h-1/3 fill-[#22314E]" />
            <p>ROS</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Ubuntu className="w-1/3 h-1/3 fill-[#E95420]" />
            <p>Ubuntu</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <YOLO className="w-1/3 h-1/3 fill-[#000000]" />
            <p>YOLO</p>
          </div>
        </Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`Arduino is an open-source electronics platform based on easy-to-use hardware and software. It consists of a simple yet powerful microcontroller board and an integrated development environment (IDE) that facilitates the programming of the board. Arduino boards are designed for hobbyists, artists, students, and anyone interested in creating interactive and programmable electronic projects. The importance of Arduino lies in its accessibility and versatility, allowing individuals with varying levels of technical expertise to explore the world of electronics and programming. It serves as a gateway for beginners to learn about hardware development, coding, and the Internet of Things (IoT). Arduino has found extensive use in a myriad of projects, ranging from basic LED displays and sensors to more complex applications like robotics, home automation systems, and interactive art installations. Its user-friendly nature, extensive online community, and a vast ecosystem of libraries and shields contribute to Arduino's significance in fostering innovation and creativity in the field of electronics and embedded systems.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`C++ is a general-purpose programming language that supports procedural, object-oriented, and generic programming. It is an extension of the C programming language, with additional features such as classes, templates, and exceptions. C++ is one of the most popular programming languages, with a wide range of applications in various domains. It is used to develop operating systems, browsers, games, and embedded systems. Its importance lies in its efficiency, speed, and versatility, making it a powerful tool for developers to create robust and scalable software.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`C# is a general-purpose, multi-paradigm programming language developed by Microsoft. It is a simple, modern, and object-oriented language that is based on C and C++. C# is used to build a variety of applications, including desktop applications, web applications, mobile applications, and games. Its importance lies in its versatility, allowing developers to create robust and scalable software for a wide range of platforms and devices.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`OpenCV, or Open Source Computer Vision Library, is a powerful open-source computer vision and machine learning software library. Developed to provide a comprehensive set of tools for image and video analysis, OpenCV is written in C++ and has bindings for various programming languages, including Python. Its importance lies in enabling developers and researchers to build applications that involve computer vision tasks, such as image and video processing, object detection and recognition, facial recognition, motion tracking, and machine learning applications. OpenCV provides a rich set of functions and algorithms, making it an essential resource for tasks ranging from basic image manipulation to advanced computer vision projects. Its versatility has led to numerous use cases, including applications in robotics, augmented reality, medical image analysis, surveillance systems, autonomous vehicles, and more. OpenCV's open-source nature, extensive documentation, and active community contribute to its widespread adoption and ongoing development, further solidifying its role in advancing the field of computer vision.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`Python is a high-level, general-purpose programming language. It is an interpreted language, with a design philosophy that emphasizes code readability and a syntax that allows programmers to express concepts in fewer lines of code than would be possible in languages such as C++ or Java. Python is used in various domains, from web development to machine learning. Its importance lies in its simplicity, versatility, and efficiency, making it a powerful tool for developers to create robust and scalable software.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`ROS, or Robot Operating System, is an open-source middleware framework specifically designed to develop and control robots. It provides a flexible and modular architecture that simplifies the development of robotic software by offering a standardized communication infrastructure and a set of tools for creating robotic applications. ROS abstracts hardware communication and provides libraries, drivers, and utilities to help with common robotics tasks. The importance of ROS lies in its ability to foster collaboration and code reuse in the robotics community. It streamlines the development process, allowing researchers and developers to focus on higher-level tasks rather than dealing with low-level hardware intricacies. ROS is crucial for various robotic applications, including but not limited to industrial automation, autonomous vehicles, drone navigation, and humanoid robots. Its modular design facilitates the integration of diverse sensors, actuators, and algorithms, making it an invaluable platform for advancing the field of robotics and enabling the rapid prototyping and deployment of robotic systems.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`Ubuntu is a popular open-source Linux distribution known for its user-friendly interface, stability, and security features. Developed and maintained by Canonical, Ubuntu is designed to be accessible to both beginners and experienced users. It serves as an operating system for desktops, servers, and cloud environments. Ubuntu's importance lies in its commitment to providing a free and open-source alternative to proprietary operating systems, promoting collaboration and community-driven development. With its robust security features, regular updates, and extensive software repositories, Ubuntu is widely used for various purposes. On desktops, it offers a user-friendly environment for everyday computing tasks, while on servers, it provides a stable platform for hosting websites, databases, and applications. Ubuntu is also a popular choice for cloud computing, with many cloud service providers offering Ubuntu-based virtual machines. Its versatility and reliability make Ubuntu a key player in the Linux ecosystem, supporting a range of use cases from personal computing to enterprise-level deployments.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`YOLO, or You Only Look Once, is a real-time object detection algorithm that has gained prominence in the field of computer vision. YOLO's significance lies in its ability to detect and classify objects in images or video frames with remarkable speed and accuracy. Unlike traditional object detection methods that rely on multiple passes through an image, YOLO divides an image into a grid and predicts bounding boxes and class probabilities simultaneously in a single pass. This efficiency makes it well-suited for real-time applications where rapid object detection is crucial. YOLO has found important use cases in various domains, such as video surveillance, autonomous vehicles, robotics, and image recognition systems. Its ability to perform object detection in real-time has practical implications for tasks like identifying and tracking objects in video streams, enhancing the capabilities of applications that require quick and accurate analysis of visual data. YOLO has undergone several versions, with YOLOv4 and YOLOv5 being some of the notable iterations, continually improving performance and extending its applicability in diverse computer vision scenarios.`}
          </p>
        </div>
      </SidebarPanel>
    </Sidebars>
  );
}

export default Engineering;
