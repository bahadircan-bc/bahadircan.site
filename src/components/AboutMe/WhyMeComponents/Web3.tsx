import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";

import EthersJS from "../../../assets/dropdownIcons/ethersjs.svg?react";
import JavaScript from "../../../assets/dropdownIcons/javascript.svg?react";
import OpenZeppelin from "../../../assets/dropdownIcons/openzeppelin.svg?react";
// import Solidity from "../../../assets/dropdownIcons/solidity.svg?react";
import TypeScript from "../../../assets/dropdownIcons/typescript.svg?react";
import Web3JS from "../../../assets/dropdownIcons/web3.svg?react";
import Wagmi from "../../../assets/dropdownIcons/wagmi.svg?react";

function Web3() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <EthersJS className="w-1/3 h-1/3 fill-[#000000]" />
            <p className="text-3xl">EthersJs</p>
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
            <OpenZeppelin className="w-1/3 h-1/3 fill-[#4E5EE4]" />
            <p className="text-3xl">OpenZeppelin</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <TypeScript className="w-1/3 h-1/3 fill-[#007ACC]" />
            <p className="text-3xl">TypeScript</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Web3JS className="w-1/3 h-1/3 fill-[#F16822]" />
            <p className="text-3xl">Web3JS</p>
          </div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            <Wagmi className="w-1/3 h-1/3 fill-[#000000]" />
            <p className="text-3xl">Wagmi</p>
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

export default Web3;
