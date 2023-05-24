import React from "react";
import { NavigationMenuBarItem } from "../NavigationMenuBarItem/NavigationMenuBarItem";

export interface NavigationMenuBarProps {
  text?: string;
  link?: string;
  menuBarStatus?: boolean;
}

export const NavigationMenuBar: React.FC<NavigationMenuBarProps> = ({
  menuBarStatus,
}) => {
  const leftItemTitle = "Docs";
  const leftItemContent = "Solve all your questions with our guides.";

  const rightItemTitle = "Playground";
  const rightItemContent = "Create your application using our UI components.";
  return (
    <section
      className={
        "max-w-lg border border-black rounded-3xl flex divide-x-2 justify-between divide-slate-400 absolute" +
          !menuBarStatus && "hidden"
      }
    >
      <NavigationMenuBarItem title={leftItemTitle} content={leftItemContent} />
      <NavigationMenuBarItem
        title={rightItemTitle}
        content={rightItemContent}
      />
    </section>
  );
};
