import React from "react";
import { NavigationItem } from "../NavigationItem/NavigationItem";

export interface PageHeaderProps {
  text: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ text }) => {
  return (
    <header className="flex justify-between items-center leading-2">
      <div>LOGO</div>
      <nav className="flex justify-between gap-x-8 items-center">
        <NavigationItem text="Onboarding" link="#" />
        <NavigationItem text="Funding Round" link="#"/>
        <NavigationItem text="Developersˇ" link="#"/>
        <button className="rounded-xl bg-green-400 border border-black p-1 px-6">Login</button>
      </nav>
    </header>
  );
};
