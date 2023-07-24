import React from "react";

import { Post } from "../../../../models/index";
import SortPosts from "./SortPosts";

interface IProps {
	currentPosts: Post[];
	sortOrderById: "asc" | "desc";
	toggleSortById: () => void;
}

export const TablePosts: React.FC<IProps> = ({
	currentPosts,
	sortOrderById,
	toggleSortById,
}) => {
	return (
		<>
			<SortPosts sortOrderById={sortOrderById} togglePosts={toggleSortById} />

			{currentPosts.map((post: Post) => {
				return (
					<ul
						key={post.id}
						className="grid grid-cols-[56px_413px_216px] md:grid-cols-[112px_480px_433px] text-[12px] md:text-[13px]"
					>
						<li className="border flex justify-center items-center w-[56px] md:w-[112px]">
							{post.id}
						</li>
						<li className="border ps-2 flex items-center w-[413px] md:w-[480px]">
							{post.title}
						</li>
						<li className="border ps-2 flex items-center w-[216px] md:w-[433px]">
							{post.body}
						</li>
					</ul>
				);
			})}
		</>
	);
};
