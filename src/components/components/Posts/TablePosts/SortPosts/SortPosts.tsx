import React from "react";

import arrowIcon from "./image/arrow.svg";

interface IProps {
	sortType: "id" | "title";
	setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
	setSortType: React.Dispatch<React.SetStateAction<"id" | "title">>;
}

export const SortPosts: React.FC<IProps> = ({
	sortType,
	setSortOrder,
	setSortType,
}) => {
	const [idAsc, setIdAsc] = React.useState<"По возрастанию" | "По убыванию">(
		"По возрастанию"
	);
	const [titleAsc, setTitleAsc] = React.useState<
		"По возрастанию" | "По убыванию"
	>("По возрастанию");

	const handleSortedPosts = (sortType: string) => {
		if (sortType === "id") {
			setSortOrder((prevSortOrder) =>
				prevSortOrder === "asc" ? "desc" : "asc"
			);
			setSortType("id");
			setIdAsc(idAsc === "По возрастанию" ? "По убыванию" : "По возрастанию");
		} else if (sortType === "title") {
			setSortOrder((prevSortOrder) =>
				prevSortOrder === "asc" ? "desc" : "asc"
			);
			setSortType("title");
			setTitleAsc(
				titleAsc === "По возрастанию" ? "По убыванию" : "По возрастанию"
			);
		}
	};

	return (
		<div className="grid grid-cols-[56px_216px_413px] lg:grid-cols-[112px_480px_433px] bg-[#474955] text-white pt-[19px] pb-[16px]">
			<div className="flex justify-center w-[56px] lg:w-[112px]">
				<p className="me-[18px] lg:me-[39px]">ID</p>
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
							onClick={() => handleSortedPosts("id")}
							className="text-sm hover:text-[#474955] hover:font-bold"
						>
							{idAsc}
						</button>
					</div>
				</div>
			</div>

			<div className="flex justify-center w-[216px] lg:w-[480px]">
				<p className="me-[18px] md:me-[34px]">Заголовок</p>
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
							onClick={() => handleSortedPosts("title")}
							className="text-sm hover:text-[#474955] hover:font-bold"
						>
							{titleAsc}
						</button>
					</div>
				</div>
			</div>

			<div className="flex justify-start ps-[30px] md:ps-[60px] lg:ps-[121px] w-[413px] lg:w-[433px]">
				<p className="me-[18px] md:me-[25px]">Описание</p>
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
							onClick={() => handleSortedPosts("title")}
							className="text-sm hover:text-[#474955] hover:font-bold"
						>
							{titleAsc}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
