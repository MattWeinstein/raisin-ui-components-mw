import React, { useState, useRef } from "react";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import { NavigationMenuBar } from "../NavigationMenuBar/NavigationMenuBar";

export interface PageHeaderProps {
  text: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ text }) => {
  return (
    <header className="flex justify-between items-center leading-2">
      <div>LOGO</div>
      <nav className="flex justify-between gap-x-8 items-center active:red">
        <NavigationItem text="Onboarding" link="#" />
        <NavigationItem text="Funding Round" link="#" />
        <NavigationItem text="Developersˇ">
          <NavigationMenuBar />
        </NavigationItem>
      </nav>
    </header>
  );
};
