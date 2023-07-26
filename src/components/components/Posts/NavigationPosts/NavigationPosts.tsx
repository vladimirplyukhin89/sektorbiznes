import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

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

	const handleClear = () => {
		setSearchTerm("");
	};

	return (
		<nav className="relative mb-[15px]">
			<input
				value={searchTerm}
				onChange={handleChange}
				placeholder="Поиск"
				type="text"
				className="text-white border-none bg-[#5A5C66] w-full max-w-[620px] ps-[26px] pt-[18px] pb-[15px]"
			/>
			<div className="fixed top-10 left-[41rem]">
				{!searchTerm.length ? (
					<AiOutlineSearch className="w-7 h-7 text-white" />
				) : (
					<button onClick={handleClear}>
						<AiOutlineClose className="w-7 h-7 text-white" />
					</button>
				)}
			</div>
		</nav>
	);
};
