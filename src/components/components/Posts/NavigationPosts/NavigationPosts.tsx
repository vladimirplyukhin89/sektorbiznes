import React from "react";

interface IProps {
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const NavigationPosts: React.FC<IProps> = ({
	searchTerm,
	setSearchTerm,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearchTerm(e.target.value);
	};

	return (
		<nav>
			<input
				value={searchTerm}
				onChange={handleChange}
				placeholder="Поиск"
				className="border-2 border-indigo-500"
			/>
		</nav>
	);
};
