import React from "react";
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
      <div className="flex-[4] h-full">
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
    <div className="flex-1 h-full overflow-scroll">
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
    <div
      onClick={onClick}
      className="flex-1 cursor-pointer w-full aspect-square"
    >
      {children}
    </div>
  );
}

function SidebarPanel({ children }: { children: React.ReactNode }) {
  return <div className="h-full w-full">{children}</div>;
}

export { Sidebars, SidebarList, Sidebar, SidebarPanel };