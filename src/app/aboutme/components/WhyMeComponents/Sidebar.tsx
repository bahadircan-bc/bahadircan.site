import React from "react";

function Sidebars({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const sidebarListElement = React.Children.toArray(children).filter(
    (child) => {
      return (child as React.ReactElement).type === SidebarList;
    }
  )[0] as React.ReactElement;

  const updatedSidebarListElement = React.cloneElement(sidebarListElement, {
    selectedIndex: selectedIndex,
    onClick: (index: number) => {
      setSelectedIndex(index);
    },
  });

  const sidebarPanelElements = React.Children.toArray(children).filter(
    (child) => {
      return (child as React.ReactElement).type === SidebarPanel;
    }
  );

  // console.log('sidebarPanelElements');
  return (
    <div className={"flex h-full".concat(className ? ` ${className}` : "")}>
      {updatedSidebarListElement}
      <div className="flex-[6] h-full">
        {sidebarPanelElements[selectedIndex]}
      </div>
    </div>
  );
}

function SidebarList({
  className,
  children,
  selectedIndex,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  selectedIndex?: number;
  onClick?: (index: number) => void;
}) {
  const updatedSidebarChildren = React.Children.map(
    children,
    (child, index) => {
      const updatedSideBar = React.cloneElement(child as React.ReactElement, {
        isSelected: selectedIndex === index,
        onClick: () => {
          console.log("clicked: ", index);
          onClick && onClick(index);
        },
      });

      return updatedSideBar;
    }
  );

  return (
    <div
      className={"flex-[2] lg:flex-[1] h-full overflow-y-scroll".concat(
        className ? ` ${className}` : ""
      )}
      style={{
        scrollbarWidth: 'none',
      }}
    >
      {updatedSidebarChildren}
    </div>
  );
}

function Sidebar({
  isSelected,
  children,
  onClick,
}: {
  isSelected?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`shrink-0 cursor-pointer w-full aspect-square relative ${isSelected ? 'bg-[#d9d9d9]' : ''}`}
    >
      {children}
    </div>
  );
}

function SidebarPanel({ className, children }: { className?: string, children: React.ReactNode }) {
  return <div className={"h-full w-full border-l text-xs lg:text-base ".concat(
    className ? ` ${className}` : ""
  )}>{children}</div>;
}

export { Sidebars, SidebarList, Sidebar, SidebarPanel };
