import React from "react";

import { useSearchPostsQuery } from "../../../server";
import { Post } from "../../../models/index";
import NavigationPosts from "./NavigationPosts";
import TablePosts from "./TablePosts";
import PaginationPosts from "./PaginationPosts";

export const Posts: React.FC<{}> = () => {
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const [currentPage, setCurrentPage] = React.useState<number>(1);
	const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
	const [sortType, setSortType] = React.useState<"id" | "title">("id");
	const postsPerPage: number = 10;
	const { isLoading, isError, data } = useSearchPostsQuery("");

	// * For filtration by value in input
	const filteredPosts: Post[] | undefined = data?.filter((post: Post) =>
		post.title.toLocaleLowerCase().includes(searchTerm.toLowerCase())
	);

	// * For pagination posts
	const indexOfLastPost: number = currentPage * postsPerPage;
	const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
	const totalPages: number = filteredPosts
		? Math.ceil(filteredPosts.length / postsPerPage)
		: 0;

	const currentPosts = React.useMemo(() => {
		return filteredPosts
			? filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
			: [];
	}, [filteredPosts, indexOfFirstPost, indexOfLastPost]);

	// * For sorting posts
	const sortPostsById = React.useCallback(
		(posts: Post[]) => {
			return posts
				.slice()
				.sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));
		},
		[sortOrder]
	);

	const sortPostsByTitle = React.useCallback(
		(posts: Post[]) => {
			return posts
				.slice()
				.sort((a, b) =>
					sortOrder === "asc"
						? a.title.localeCompare(b.title) - b.title.localeCompare(a.title)
						: b.title.localeCompare(a.title) - a.title.localeCompare(b.title)
				);
		},
		[sortOrder]
	);

	const sortedPosts = React.useMemo(() => {
		switch (sortType) {
			case "id":
				return sortPostsById(currentPosts);
			case "title":
				return sortPostsByTitle(currentPosts);
			default:
				return currentPosts;
		}
	}, [sortType, currentPosts, sortPostsById, sortPostsByTitle]);

	// * For watching currentPage in URL
	const updatePageInURL = (page: number) => {
		const newURL: string = `${window.location.pathname}#${page}`;
		window.history.replaceState({ path: newURL }, "", newURL);
	};

	React.useEffect(() => {
		updatePageInURL(currentPage);
	}, [currentPage]);

	if (isLoading) {
		return (
			<div className="flex justify-center mt-4">
				<p className="text-xl font-bold text-blue-500">Loading...</p>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex justify-center mt-4">
				<p className="text-xl font-bold text-rose-600">Error</p>
			</div>
		);
	}

	return (
		<>
			<NavigationPosts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

			{Array.isArray(currentPosts) && currentPosts.length ? (
				<table>
					<TablePosts
						currentPosts={sortedPosts}
						setSortOrder={setSortOrder}
						setSortType={setSortType}
					/>
					<PaginationPosts
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
					/>
				</table>
			) : (
				<div className="flex justify-center mt-4">
					<p className="text-xl font-bold text-blue-500">Список постов пуст</p>
				</div>
			)}
		</>
	);
};
