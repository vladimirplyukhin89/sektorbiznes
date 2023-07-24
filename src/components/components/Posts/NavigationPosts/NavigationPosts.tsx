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
		<nav className=" mb-[15px]">
			<input
				value={searchTerm}
				onChange={handleChange}
				placeholder="Поиск"
				type="text"
				className="text-white border-none bg-[#5A5C66] w-full max-w-[620px] ps-[26px] pt-[18px] pb-[15px]"
			/>
		</nav>
	);
};
