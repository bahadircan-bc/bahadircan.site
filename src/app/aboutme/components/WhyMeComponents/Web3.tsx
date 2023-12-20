import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";

import EthersJS from "@/assets/dropdownIcons/ethersjs.svg";
import JavaScript from "@/assets/dropdownIcons/javascript.svg";
import OpenZeppelin from "@/assets/dropdownIcons/openzeppelin.svg";
// import Solidity from "@/assets/dropdownIcons/solidity.svg";
import TypeScript from "@/assets/dropdownIcons/typescript.svg";
import Web3JS from "@/assets/dropdownIcons/web3.svg";
import Wagmi from "@/assets/dropdownIcons/wagmi.svg";

function Web3() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black flex flex-col items-center">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <EthersJS className="w-1/3 h-1/3 fill-[#000000]" />
            <p>EthersJs</p>
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
            <OpenZeppelin className="w-1/3 h-1/3 fill-[#4E5EE4]" />
            <p>OpenZeppelin</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <TypeScript className="w-1/3 h-1/3 fill-[#007ACC]" />
            <p>TypeScript</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Web3JS className="w-1/3 h-1/3 fill-[#F16822]" />
            <p>Web3JS</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Wagmi className="w-1/3 h-1/3 fill-[#000000]" />
            <p>Wagmi</p>
          </div>
        </Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`Ethers is a JavaScript library that simplifies the interaction with the Ethereum blockchain, providing developers with a set of tools and utilities to build decentralized applications (DApps) and interact with smart contracts. Ethereum, a decentralized platform for building blockchain applications, relies on smart contracts, self-executing code running on the Ethereum Virtual Machine (EVM). Ethers facilitates the seamless integration of Ethereum functionality into web and mobile applications, allowing developers to manage wallets, send transactions, and interact with smart contracts with ease. Its importance lies in abstracting the complexities of blockchain development, offering a user-friendly interface for developers to harness the power of decentralized technologies. Ethers is crucial in the development of decentralized finance (DeFi) applications, non-fungible token (NFT) platforms, and various blockchain-based solutions. By providing a convenient and efficient way to work with Ethereum, Ethers empowers developers to create decentralized applications that leverage the security, transparency, and immutability of blockchain technology.`}
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
            {`OpenZeppelin is a library for secure smart contract development. It provides implementations of standards like ERC20 and ERC721 which you can deploy as-is or extend to suit your needs, as well as Solidity components to build custom contracts and more complex decentralized systems. With OpenZeppelin, you can focus on your business logic, and have confidence in the security and auditability of your code. OpenZeppelin is meant to provide secure, tested and community-audited code for the Ethereum community to use in their projects. With OpenZeppelin, you can build distributed applications, protocols and organizations: create smart contracts in Solidity using common patterns, inherit from a collection of contracts and libraries, and review an ever-growing collection of example contracts and libraries.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution. TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries like jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`Web3.js is a collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC or WebSocket. The Web3.js library interacts with the Ethereum blockchain. It can retrieve user accounts, send transactions, interact with smart contracts, and more. Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket. The web3.js library interacts with the ethereum blockchain. It can retrieve user accounts, send transactions, interact with smart contracts, and more.`}
          </p>
        </div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="h-full text-start flex items-center justify-center">
          <p className="w-2/3">
            {`Wagmi is a collection of React Hooks that provides a comprehensive set of tools for developing applications on the Ethereum network. It is designed to simplify the process of interacting with Ethereum and offers a wide range of functionalities including wallet connection, transaction signing, contract interaction, and more 1. The use of React Hooks makes it easier to manage state and side effects in your React components, leading to cleaner and more maintainable code. Wagmi includes more than 20 hooks for interacting with wallets, Ethereum Name Service (ENS), contracts, transactions, and signing. It also provides built-in wallet connectors for popular Ethereum wallets like MetaMask, WalletConnect, and Coinbase Wallet. One of the key features of Wagmi is its support for caching, request deduplication, multicall, batching, and persistence. These features help improve performance and efficiency when interacting with the Ethereum network. It is also TypeScript ready, allowing developers to infer types from ABIs and EIP-712 Typed Data. The importance of Wagmi lies in its role in simplifying the development of Ethereum applications. It abstracts away many of the complexities associated with interacting with the Ethereum network, making it easier for developers to focus on building their applications.`}
          </p>
        </div>
      </SidebarPanel>
    </Sidebars>
  );
}

export default Web3;
