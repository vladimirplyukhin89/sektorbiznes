import React from "react";

import { Post } from "../../../../models/index";

interface IProps {
	currentPosts: Post[];
}

export const TablePosts: React.FC<IProps> = ({ currentPosts }) => {
	return (
		<>
			{currentPosts.map((post: Post) => {
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
