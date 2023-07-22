import React from "react";

import { useSearchPostsQuery } from "../../../server";
import { Post } from "../../../models/index";
import NavigationPosts from "./NavigationPosts";
import TablePosts from "./TablePosts";
import PaginationPosts from "./PaginationPosts";

export const Posts: React.FC<{}> = () => {
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const [currentPage, setCurrentPage] = React.useState<number>(1);
	const postsPerPage: number = 10;
	const { isLoading, isError, data } = useSearchPostsQuery("");

	// * For filtration by value in input
	const filteredPosts: Post[] | undefined = data?.filter((post: Post) =>
		post.title.toLocaleLowerCase().includes(searchTerm.toLowerCase())
	);

	// * For pagination posts
	const indexOfLastPost: number = currentPage * postsPerPage;
	const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
	const currentPosts: Post[] = filteredPosts
		? filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
		: [];

	const totalPages: number = filteredPosts
		? Math.ceil(filteredPosts.length / postsPerPage)
		: 0;

	const handlePageChange = (pageNumber: number): void => {
		setCurrentPage(pageNumber);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<>
			<NavigationPosts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

			{Array.isArray(currentPosts) && currentPosts.length ? (
				<TablePosts currentPosts={currentPosts} />
			) : (
				<p>Список постов пуст</p>
			)}
			<PaginationPosts
				currentPage={currentPage}
				totalPages={totalPages}
				handlePageChange={handlePageChange}
			/>
		</>
	);
};
