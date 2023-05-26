import React from "react";

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
    <button className="active:red">
      <div className="decoration-2 decoration-stone-300 underline-offset-2 hover:underline active:decoration-red-400 relative active:red">
        {link ? <a href={link}>{text}</a> : <div>{text}</div>}
        {children}
      </div>
    </button>
  );
};
