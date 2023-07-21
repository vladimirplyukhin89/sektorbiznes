import React from "react";

import { useSearchPostsQuery } from "../../server/server.api";
import { Post } from "../../models/index";

const Navigation = () => {
	const { isLoading, isError, data } = useSearchPostsQuery("");

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>isError!</div>;
	}

	return (
		<nav className="flex flex-col">
			<input />

			{data?.map((post: Post) => {
				return (
					<div>
						<div>{post.title}</div>
						<div>{post.body}</div>
					</div>
				);
			})}
		</nav>
	);
};

export { Navigation };
