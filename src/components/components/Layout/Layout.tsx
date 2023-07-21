import React from "react";

interface IProps {
	children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
	return <div className="py-3 md:py-[25px] px-4 md:px-[75px]">{children}</div>;
};
