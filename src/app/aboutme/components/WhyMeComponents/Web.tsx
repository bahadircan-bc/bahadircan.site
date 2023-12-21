import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";
import React from "@/assets/dropdownIcons/react.svg";
import CSS3 from "@/assets/dropdownIcons/css3.svg";
import Docker from "@/assets/dropdownIcons/docker.svg";
import Django from "@/assets/dropdownIcons/django.svg";
import Express from "@/assets/dropdownIcons/express.svg";
import Framer from "@/assets/dropdownIcons/framer.svg";
import HTML5 from "@/assets/dropdownIcons/html5.svg";
import GraphQL from "@/assets/dropdownIcons/graphql.svg";
import JavaScript from "@/assets/dropdownIcons/javascript.svg";
import Next from "@/assets/dropdownIcons/next.svg";
import Ngrok from "@/assets/dropdownIcons/ngrok.svg";
import Node from "@/assets/dropdownIcons/node.svg";
import PostgreSQL from "@/assets/dropdownIcons/postgresql.svg";
import Python from "@/assets/dropdownIcons/python.svg";
import SQLite from "@/assets/dropdownIcons/sqlite.svg";
import TailwindCSS from "@/assets/dropdownIcons/tailwindcss.svg";
import TypeScript from "@/assets/dropdownIcons/typescript.svg";

function Web() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black flex flex-col items-center">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <React className="w-1/3 h-1/3 fill-[#61DAFB]" />
            <p className="text-xs lg:text-base">React</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <CSS3 className="w-1/3 h-1/3 fill-[#1572B6]" />
            <p className="text-xs lg:text-base">CSS3</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Docker className="w-1/3 h-1/3 fill-[#2496ED]" />
            <p className="text-xs lg:text-base">Docker</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Django className="w-1/3 h-1/3 fill-[#092E20]" />
            <p className="text-xs lg:text-base">Django</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Express className="w-1/3 h-1/3 fill-[#000000]" />
            <p className="text-xs lg:text-base">Express</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Framer className="w-1/3 h-1/3 fill-[#0055FF]" />
            <p className="text-xs lg:text-base">Framer</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <HTML5 className="w-1/3 h-1/3 fill-[#E34F26]" />
            <p className="text-xs lg:text-base">HTML5</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <GraphQL className="w-1/3 h-1/3 fill-[#E10098]" />
            <p className="text-xs lg:text-base">GraphQL</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <JavaScript className="w-1/3 h-1/3 fill-[#F7DF1E]" />
            <p className="text-xs lg:text-base">JavaScript</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Next className="w-1/3 h-1/3 fill-[#000000]" />
            <p className="text-xs lg:text-base">Next</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Ngrok className="w-1/3 h-1/3 fill-[#1F1E1E]" />
            <p className="text-xs lg:text-base">Ngrok</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Node className="w-1/3 h-1/3 fill-[#339933]" />
            <p className="text-xs lg:text-base">Node</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <PostgreSQL className="w-1/3 h-1/3 fill-[#336791]" />
            <p className="text-xs lg:text-base">PostgreSQL</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Python className="w-1/3 h-1/3 fill-[#3776AB]" />
            <p className="text-xs lg:text-base">Python</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <SQLite className="w-1/3 h-1/3 fill-[#003B57]" />
            <p className="text-xs lg:text-base">SQLite</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <TailwindCSS className="w-1/3 h-1/3 fill-[#38B2AC]" />
            <p className="text-xs lg:text-base">TailwindCSS</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <TypeScript className="w-1/3 h-1/3 fill-[#007ACC]" />
            <p className="text-xs lg:text-base">TypeScript</p>
          </div>
        </Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`React is an open-source JavaScript library developed by Facebook for
            building user interfaces, particularly single-page applications
            where smooth, efficient updates are crucial. It utilizes a
            component-based architecture, enabling developers to create reusable
            and modular UI components. React's key innovation lies in its
            virtual DOM (Document Object Model), which optimizes the updating
            process by only rendering the parts of the user interface that have
            changed. This approach significantly enhances performance and
            provides a more seamless user experience. React has become a
            cornerstone in modern web development, as it simplifies the creation
            of interactive and dynamic user interfaces. Its popularity is
            attributed to its declarative syntax, efficient data binding, and
            strong community support. React finds applications in various
            domains, from building dynamic web applications to crafting mobile
            apps using React Native. Its ability to efficiently manage state,
            handle complex UI interactions, and support a rich ecosystem of
            libraries and tools makes it indispensable for developers aiming to
            deliver responsive and engaging user experiences.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`CSS, or Cascading Style Sheets, is a fundamental technology in web development that defines the presentation and layout of HTML documents. It provides a styling mechanism to control the appearance of web pages, enabling developers to customize the look and feel of elements on a website. CSS plays a crucial role in separating content from design, making it easier to maintain and update web pages. By applying styles such as colors, fonts, spacing, and positioning, CSS enhances the visual appeal and user experience of a website. Its importance lies in its ability to create consistent and visually pleasing designs across different devices and screen sizes. CSS allows for responsive design, making websites adaptable to various viewing environments, from desktops to mobile devices. Use cases for CSS are diverse, ranging from designing simple blogs to complex e-commerce platforms. It is also essential for creating print stylesheets, ensuring that web content can be easily formatted for printing. In summary, CSS is a cornerstone technology in web development, empowering designers and developers to craft aesthetically pleasing and user-friendly interfaces.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`Docker is a containerization platform that enables developers to package, deploy, and run applications in a consistent manner. It provides a standardized environment for applications to run, ensuring that they can be easily moved between different environments. Docker containers are lightweight, portable, and isolated, making them ideal for deploying applications in production. Docker is an open-source project that has become a cornerstone in modern software development. It has revolutionized the way developers build and ship applications, enabling them to focus on writing code instead of managing dependencies. Docker containers are used in various domains, from building microservices to deploying machine learning models. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable applications.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. It provides a clean and pragmatic design, making it easy for developers to build complex web applications. Django's key innovation lies in its ability to generate a web application from scratch, providing a foundation for developers to build upon. It also comes with a built-in admin interface that allows for easy content management. Django is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. Django is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed to build single-page, multi-page, and hybrid web applications. Express is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. Express is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`Framer is a prototyping tool that enables designers and developers to create interactive prototypes for web and mobile applications. It provides a visual editor for designing interfaces and a code editor for writing code. Framer's key innovation lies in its ability to generate code from a visual design, providing a foundation for developers to build upon. It also comes with a built-in code editor that allows for easy customization. Framer is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. Framer is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`HTML, or HyperText Markup Language, is a fundamental technology in web development that defines the structure and content of web pages. It provides a markup language to describe the semantics of web pages, enabling developers to create accessible and well-structured websites. HTML plays a crucial role in separating content from design, making it easier to maintain and update web pages. By applying semantic tags such as headings, paragraphs, and lists, HTML enhances the accessibility and usability of a website. Its importance lies in its ability to create consistent and accessible designs across different devices and screen sizes. HTML allows for responsive design, making websites adaptable to various viewing environments, from desktops to mobile devices. Use cases for HTML are diverse, ranging from designing simple blogs to complex e-commerce platforms. It is also essential for creating print stylesheets, ensuring that web content can be easily formatted for printing. In summary, HTML is a cornerstone technology in web development, empowering designers and developers to craft accessible and user-friendly interfaces.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`GraphQL is a query language for APIs and a runtime for fulfilling those queries with existing data. It provides a declarative syntax for describing data requirements, enabling developers to create flexible and efficient APIs. GraphQL's key innovation lies in its ability to generate a schema from a query, providing a foundation for developers to build upon. It also comes with a built-in schema editor that allows for easy customization. GraphQL is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. GraphQL is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-11/12 lg:w-2/3">
            {`JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is one of the three core technologies of web development, along with HTML and CSS. JavaScript enables interactive web pages and is an essential part of web applications. It is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-11/12 lg:w-2/3">
            {`Next.js is a React framework that enables developers to build static and server-side rendered websites. It provides a clean and pragmatic design, making it easy for developers to build complex web applications. Next.js's key innovation lies in its ability to generate a static website from scratch, providing a foundation for developers to build upon. It also comes with a built-in code editor that allows for easy customization. Next.js is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. Next.js is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-11/12 lg:w-2/3">
            {`Ngrok is a tool that enables developers to expose local servers behind NATs and firewalls to the public internet. It provides a secure tunnel for local development, enabling developers to test their applications on different devices. Ngrok's key innovation lies in its ability to generate a secure tunnel from a local server, providing a foundation for developers to build upon. It also comes with a built-in code editor that allows for easy customization. Ngrok is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. Ngrok is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-11/12 lg:w-2/3">
            {`Node.js is a JavaScript runtime environment that enables developers to build scalable network applications. It provides a clean and pragmatic design, making it easy for developers to build complex web applications. Node.js's key innovation lies in its ability to generate a web application from scratch, providing a foundation for developers to build upon. It also comes with a built-in code editor that allows for easy customization. Node.js is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. Node.js is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-11/12 lg:w-2/3">
            {`PostgreSQL is a powerful, open-source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. PostgreSQL is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. PostgreSQL is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable websites.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-11/12 lg:w-2/3">
            {`Python is a high-level, general-purpose programming language. It is one of the most popular programming languages in the world, with a large community of developers and a rich ecosystem of libraries and tools. Python enables developers to build applications for a wide range of domains, from web development to machine learning. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable applications.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-11/12 lg:w-2/3">
            {`SQLite is a relational database management system that is embedded in the application. It is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. SQLite is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable applications.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-11/12 lg:w-2/3">
            {`Tailwind CSS is a utility-first CSS framework that enables developers to build responsive web applications. It provides a clean and pragmatic design, making it easy for developers to build complex web applications. Tailwind CSS's key innovation lies in its ability to generate a web application from scratch, providing a foundation for developers to build upon. It also comes with a built-in code editor that allows for easy customization. Tailwind CSS is an open-source project that has become a cornerstone in modern web development. It has revolutionized the way developers build websites, enabling them to focus on writing code instead of managing infrastructure. Tailwind CSS is used in various domains, from building content management systems to creating e-commerce platforms. Its ability to simplify the development process and improve the efficiency of software delivery makes it indispensable for developers aiming to build robust and scalable applications.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center overflow-y-scroll">
          <p className="w-11/12 lg:w-2/3">
            {`TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution. TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries like jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.`}
          </p>
        </div>
      </SidebarPanel>
    </Sidebars>
  );
}

export default Web;
