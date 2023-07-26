import React from "react";

import arrowIcon from "./image/arrow.svg";

interface IProps {
	handleTitleSort: () => void;
	handleIdSort: () => void;
}

export const SortPosts: React.FC<IProps> = ({
	handleTitleSort,
	handleIdSort,
}) => {
	const [idByAsc, setidByAsc] = React.useState<
		"По возрастанию" | "По убыванию"
	>("По возрастанию");
	const [titleByAsc, setTitleByAsc] = React.useState<
		"С начала: A-Z" | "С конца: Z-A"
	>("С начала: A-Z");

	const handlePostsById = () => {
		setidByAsc(idByAsc === "По возрастанию" ? "По убыванию" : "По возрастанию");
		handleIdSort();
	};

	const handlePostsByTitle = () => {
		setTitleByAsc(
			titleByAsc === "С начала: A-Z" ? "С конца: Z-A" : "С начала: A-Z"
		);
		handleTitleSort();
	};
	return (
		<thead className="grid grid-cols-[56px_216px_413px] lg:grid-cols-[112px_480px_433px] bg-[#474955] text-white pt-[19px] pb-[16px]">
			<tr className="flex justify-center w-[56px] md:w-[112px]">
				<th className="me-[18px] md:me-[39px]">ID</th>
				<div className="relative group">
					<button>
						<img
							src={arrowIcon}
							alt="click me"
							className="group-hover:scale-125 group-hover:animate-pulse"
						/>
					</button>
					<div className="bg-[#7EBC3C]/[0.9] rounded-sm p-1 w-[130px] text-center absolute top-30% right-0 left-[-50px] md:left-[-60px] opacity-0 group-hover:opacity-100">
						<button
							onClick={handlePostsById}
							className="text-sm hover:text-[#474955] hover:font-bold"
						>
							{idByAsc}
						</button>
					</div>
				</div>
			</tr>

			<tr className="flex justify-center w-[216px] lg:w-[480px]">
				<th className="me-[18px] md:me-[34px]">Заголовок</th>
				<div className="relative group">
					<button>
						<img
							src={arrowIcon}
							alt="click me"
							className="group-hover:scale-125 group-hover:animate-pulse"
						/>
					</button>
					<div className="bg-[#7EBC3C]/[0.9] rounded-sm p-1 w-[130px] text-center absolute top-30% right-0 left-[-50px] md:left-[-60px] opacity-0 group-hover:opacity-100">
						<button
							onClick={handlePostsByTitle}
							className="text-sm hover:text-[#474955] hover:font-bold"
						>
							{titleByAsc}
						</button>
					</div>
				</div>
			</tr>

			<tr className="flex justify-start ps-[30px] md:ps-[60px] lg:ps-[121px] w-[413px] lg:w-[433px]">
				<th className="me-[18px] md:me-[25px]">Описание</th>
				<div className="relative group">
					<button>
						<img
							src={arrowIcon}
							alt="click me"
							className="group-hover:scale-125 group-hover:animate-pulse"
						/>
					</button>
					<div className="bg-[#7EBC3C]/[0.9] rounded-sm p-1 w-[130px] text-center absolute top-30% right-0 left-[-50px] md:left-[-60px] opacity-0 group-hover:opacity-100">
						<button
							onClick={handlePostsByTitle}
							className="text-sm hover:text-[#474955] hover:font-bold"
						>
							{titleByAsc}
						</button>
					</div>
				</div>
			</tr>
		</thead>
	);
};
