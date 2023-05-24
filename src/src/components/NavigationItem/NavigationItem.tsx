import React, { ReactElement } from "react";

export interface NavigationItemProps {
  text?: string;
  link?: string;
  menuBarStatus?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  link,
  children,
}) => {
  return (
    <div className="decoration-2 decoration-stone-300 underline-offset-2 hover:underline active:decoration-stone-800 ">
      {link ? <a href={link}>{text}</a> : <div>{text}</div>}
      {children}
    </div>
  );
};
