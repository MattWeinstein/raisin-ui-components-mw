import React from "react";

export interface NavigationItemProps {
  text: string,
  link:string
}

export const NavigationItem: React.FC<NavigationItemProps> = ({text,link}) => {
  return (
    <div className="decoration-2 decoration-stone-300 underline-offset-2 hover:underline active:decoration-stone-800 ">
      <a href={link}>{text}</a>
    </div>
  );
};
