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

	// * For watching currentPage in URL
	const updatePageInURL = (page: number) => {
		const newURL: string = `${window.location.pathname}#${page}`;
		window.history.replaceState({ path: newURL }, "", newURL);
	};

	React.useEffect(() => {
		updatePageInURL(currentPage);
	}, [currentPage]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<div className="">
			<NavigationPosts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

			{Array.isArray(currentPosts) && currentPosts.length ? (
				<>
					<TablePosts currentPosts={currentPosts} />
				</>
			) : (
				<p>Список постов пуст</p>
			)}
			<PaginationPosts
				currentPage={currentPage}
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};
