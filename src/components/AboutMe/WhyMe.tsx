import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Sidebars({ children }: { children: React.ReactNode }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const sidebarListElement = React.Children.toArray(children).filter(
    (child) => {
      return (child as React.ReactElement).type === SidebarList;
    }
  )[0] as React.ReactElement;

  const updatedSidebarListElement = React.cloneElement(sidebarListElement, {
    onClick: (index: number) => {
      setSelectedIndex(index);
    },
  });

  const sidebarPanelElements = React.Children.toArray(children).filter(
    (child) => {
      return (child as React.ReactElement).type === SidebarPanel;
    }
  );

  console.log(sidebarPanelElements);
  return (
    <div className="flex h-full">
      {updatedSidebarListElement}
      <div className="flex-[4] bg-blue-500 h-full">
        {sidebarPanelElements[selectedIndex]}
      </div>
    </div>
  );
}

function SidebarList({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: (index: number) => void;
}) {
  const updatedSidebarChildren = React.Children.map(
    children,
    (child, index) => {
      return React.cloneElement(child as React.ReactElement, {
        onClick: () => {
          console.log("clicked: ", index);
          onClick && onClick(index);
        },
      });
    }
  );

  return (
    <div className="flex-1 bg-red-500 h-full flex flex-col gap-10">
      {updatedSidebarChildren}
    </div>
  );
}

function Sidebar({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick} className="flex-1 cursor-pointer bg-pink-500">
      {children}
    </div>
  );
}

function SidebarPanel({ children }: { children: React.ReactNode }) {
  return <div className="h-full w-full">{children}</div>;
}

function Web() {
  return (
    <Sidebars>
      <SidebarList>
        <Sidebar>asdf</Sidebar>
        <Sidebar>asdf</Sidebar>
        <Sidebar>asdf</Sidebar>
        <Sidebar>asdf</Sidebar>
      </SidebarList>
      <SidebarPanel>
        <div className="bg-yellow-500 h-full">world</div>
      </SidebarPanel>
      <SidebarPanel>
        <div className="bg-yellow-500 h-full">hello</div>
      </SidebarPanel>
    </Sidebars>
  );
}

function Web3() {
  return (
    <div className="flex h-full">
      <div className="flex-1 bg-red-500 h-full">asdf</div>
      <div className="flex-[4] bg-blue-500 h-full">asdf</div>
    </div>
  );
}

function Engineering() {
  return (
    <div className="flex h-full">
      <div className="flex-1 bg-red-500 h-full">asdf</div>
      <div className="flex-[4] bg-blue-500 h-full">asdf</div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="flex h-full">
      <div className="flex-1 bg-red-500 h-full">asdf</div>
      <div className="flex-[4] bg-blue-500 h-full">asdf</div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="flex h-full">
      <div className="flex-1 bg-red-500 h-full">asdf</div>
      <div className="flex-[4] bg-blue-500 h-full">asdf</div>
    </div>
  );
}

function WhyMe() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full h-fit flex items-center justify-center text-white text-9xl mb-[10vh]">
        Why me?
      </div>
      <Tabs className="flex-1 w-2/3 text-white flex flex-col">
        <TabList className="border-0 flex justify-evenly border-b">
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Web
          </Tab>
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Web3
          </Tab>
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Engineering
          </Tab>
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Desktop
          </Tab>
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Mobile
          </Tab>
        </TabList>
        <TabPanel selectedClassName="flex-1" className="overflow-clip">
          <Web />
        </TabPanel>
        <TabPanel selectedClassName="flex-1" className="overflow-clip">
          <Web3 />
        </TabPanel>
        <TabPanel selectedClassName="flex-1" className="overflow-clip">
          <Engineering />
        </TabPanel>
        <TabPanel selectedClassName="flex-1" className="overflow-clip">
          <Desktop />
        </TabPanel>
        <TabPanel selectedClassName="flex-1" className="overflow-clip">
          <Mobile />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default WhyMe;
