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
						<tr className="grid grid-cols-[56px_413px_216px] md:grid-cols-[112px_480px_433px] text-[12px] md:text-[13px]">
							<td className="border flex justify-center items-center w-[56px] md:w-[112px]">
								{post.id}
							</td>
							<td className="border ps-2 flex items-center w-[413px] md:w-[480px]">
								{post.title}
							</td>
							<td className="border ps-2 flex items-center w-[216px] md:w-[433px]">
								{post.body}
							</td>
						</tr>
					</tbody>
				);
			})}
		</>
	);
};
