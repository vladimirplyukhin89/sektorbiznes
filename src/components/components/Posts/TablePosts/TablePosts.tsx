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
					<ul key={post.id}>
						<li>{post.title}</li>
						<li>{post.body}</li>
						<li>{post.id}</li>
					</ul>
				);
			})}
		</>
	);
};
