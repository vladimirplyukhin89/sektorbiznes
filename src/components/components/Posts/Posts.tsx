import React from "react";

import { useSearchPostsQuery } from "../../../server";
import { Post } from "../../../models/index";
import NavigationPosts from "./NavigationPosts";
import TablePosts from "./TablePosts";

export const Posts: React.FC<{}> = () => {
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const { isLoading, isError, data } = useSearchPostsQuery("");

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	const filteredPosts: Post[] | undefined = data?.filter((post: Post) =>
		post.title.toLocaleLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<NavigationPosts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

			{Array.isArray(filteredPosts) && filteredPosts.length ? (
				<TablePosts filteredPosts={filteredPosts} />
			) : (
				"Список постов пуст"
			)}
		</>
	);
};
