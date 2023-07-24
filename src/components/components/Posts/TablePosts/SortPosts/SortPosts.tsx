import React from "react";

import arrowIcon from "./image/arrow.svg";

interface IProps {
	sortOrderById: "asc" | "desc";
	togglePosts: () => void;
}

export const SortPosts: React.FC<IProps> = ({ togglePosts }) => {
	const [nameByAsc, setNameByAsc] = React.useState<
		"По возрастанию" | "По убыванию"
	>("По возрастанию");

	const handlePostsById = () => {
		setNameByAsc(
			nameByAsc === "По возрастанию" ? "По убыванию" : "По возрастанию"
		);
		togglePosts();
	};

	return (
		<div className="grid grid-cols-[56px_413px_216px] md:grid-cols-[112px_480px_433px] bg-[#474955] text-white pt-[19px] pb-[16px]">
			<div className="flex justify-center w-[56px] md:w-[112px]">
				<p className="me-[18px] md:me-[39px]">ID</p>
				<div className="relative group">
					<button>
						<img
							src={arrowIcon}
							alt="click me"
							className="group-hover:scale-125 group-hover:animate-pulse"
						/>
					</button>
					<div className="bg-[#7EBC3C]/[0.9] rounded-sm p-1 w-[130px] text-center absolute top-30% right-0 left-[-50px] md:left-[-70px] opacity-0 group-hover:opacity-100">
						<button
							onClick={handlePostsById}
							className="text-sm hover:text-[#474955] hover:font-bold"
						>
							{nameByAsc}
						</button>
					</div>
				</div>
			</div>

			<div className="flex justify-center w-[413px] md:w-[480px]">
				<p className="me-[18px] md:me-[34px]">Заголовок</p>
				<button className="hover:scale-125 hover:animate-pulse">
					<img src={arrowIcon} alt="click me" />
				</button>
			</div>

			<div className="flex justify-start ps-[30px] md:ps-[60px] lg:ps-[121px] w-[216px] md:w-[433px]">
				<p className="me-[18px] md:me-[25px]">Описание</p>
				<button className="hover:scale-125 hover:animate-pulse">
					<img src={arrowIcon} alt="click me" />
				</button>
			</div>
		</div>
	);
};
