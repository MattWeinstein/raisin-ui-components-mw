import React from "react";

export interface NavigationMenuBarItemProps {
  title:string,
  content:string
}

export const NavigationMenuBarItem: React.FC<NavigationMenuBarItemProps> = ({title,content}) => {
  return (
      <div className="my-3 pl-6 pr-2">
        <h3 className="font-semibold">{title}</h3>
        <p>{content}</p>
      </div>
  );
};
