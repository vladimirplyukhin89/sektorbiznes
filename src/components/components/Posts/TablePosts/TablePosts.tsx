import React from "react";

import { Post } from "../../../../models/index";
import SortPosts from "./SortPosts";

interface IProps {
	sortPostsById: (posts: Post[]) => Post[];
	sortPostsByTitle: (posts: Post[]) => Post[];
	currentPosts: Post[];
	setSortType: React.Dispatch<React.SetStateAction<"title" | "id">>;
	setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
}

export const TablePosts: React.FC<IProps> = ({
	sortPostsById,
	sortPostsByTitle,
	currentPosts,
	setSortType,
	setSortOrder,
}) => {
	const [sortedPosts, setSortedPosts] = React.useState<Post[]>(currentPosts);
	const handleTitleSort = () => {
		setSortType("title");
		setSortOrder("asc" ? "desc" : "asc");
		setSortedPosts(sortPostsByTitle(currentPosts));
	};

	const handleIdSort = () => {
		setSortType("id");
		setSortOrder("asc" ? "desc" : "asc");
		setSortedPosts(sortPostsById(currentPosts));
	};

	return (
		<>
			<SortPosts
				handleTitleSort={handleTitleSort}
				handleIdSort={handleIdSort}
			/>

			{currentPosts.map((post: Post) => {
				return (
					<tbody key={post.id}>
						<tr className="grid grid-cols-[56px_216px_413px] lg:grid-cols-[112px_433px_480px] text-[12px] md:text-[13px]">
							<td className="border flex justify-center items-center w-[56px] lg:w-[112px] h-[82px]">
								{post.id}
							</td>
							<td className="border ps-2 flex items-center w-[216px] lg:w-[433px] h-[82px]">
								{post.title}
							</td>
							<td className="border ps-2 flex items-center w-[413px] lg:w-[480px] h-[82px]">
								{post.body}
							</td>
						</tr>
					</tbody>
				);
			})}
		</>
	);
};
