import React from "react";

import { Post } from "../../../../models/index";

interface IProps {
	filteredPosts: Post[];
}

export const TablePosts: React.FC<IProps> = ({ filteredPosts }) => {
	return (
		<>
			{filteredPosts.map((post: Post) => {
				return (
					<ul key={post.id} className="grid grid-cols-[80px_auto_40%]">
						<li className="border flex justify-center items-center">
							{post.id}
						</li>
						<li className="border ps-2 flex items-center">{post.title}</li>
						<li className="border ps-2 flex items-center">{post.body}</li>
					</ul>
				);
			})}
		</>
	);
};
