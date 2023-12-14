import { Sidebar, SidebarList, SidebarPanel, Sidebars } from "./Sidebar";

function Engineering() {
  return (
    <Sidebars>
      <SidebarList>
        <Sidebar>
          <div className="h-full w-full grid place-items-center">asdf</div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full grid place-items-center">asdf</div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full grid place-items-center">asdf</div>
        </Sidebar>
        <Sidebar>
          <div className="h-full w-full grid place-items-center">asdf</div>
        </Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="bg-yellow-500 h-full">hello world</div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="bg-yellow-500 h-full">hello</div>
      </SidebarPanel>
    </Sidebars>
  );
}

export default Engineering;