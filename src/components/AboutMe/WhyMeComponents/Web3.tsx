import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";

function Web3() {
  return (
    <Sidebars className="pt-10">
      <SidebarList className="bg-white rounded-l-2xl text-black">
        <Sidebar>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            
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

export default Web3;