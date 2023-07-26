import React from "react";

interface IProps {
	setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
	setSortType: React.Dispatch<React.SetStateAction<"id" | "title">>;
}

export const SortPosts: React.FC<IProps> = ({ setSortOrder, setSortType }) => {
	const handleSortedPosts = (type: string) => {
		if (type === "id") {
			setSortOrder((prevSortOrder) =>
				prevSortOrder === "asc" ? "desc" : "asc"
			);
			setSortType("id");
		} else if (type === "title") {
			setSortOrder((prevSortOrder) =>
				prevSortOrder === "asc" ? "desc" : "asc"
			);
			setSortType("title");
		}
	};

	const renderSortButton = (label: string, sortType: "id" | "title") => {
		return (
			<th className="flex justify-center w-[56px] lg:w-[112px]">
				<span
					onClick={() => handleSortedPosts(sortType)}
					className="cursor-pointer"
				>
					<span className="me-[18px] lg:me-[39px]">{label}</span>
				</span>
			</th>
		);
	};

	return (
		<thead className="grid grid-cols-[56px_216px_413px] lg:grid-cols-[112px_480px_433px] bg-[#474955] text-white pt-[19px] pb-[16px]">
			<tr className="flex justify-center w-[56px] lg:w-[112px]">
				{renderSortButton("ID", "id")}
			</tr>

			<tr className="flex justify-center w-[216px] lg:w-[480px]">
				{renderSortButton("Заголовок", "title")}
			</tr>

			<tr className="flex justify-start ps-[30px] md:ps-[60px] lg:ps-[121px] w-[413px] lg:w-[433px]">
				{renderSortButton("Описание", "title")}
			</tr>
		</thead>
	);
};
