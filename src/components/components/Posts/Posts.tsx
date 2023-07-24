import React from "react";

import { useSearchPostsQuery } from "../../../server";
import { Post } from "../../../models/index";
import NavigationPosts from "./NavigationPosts";
import TablePosts from "./TablePosts";
import PaginationPosts from "./PaginationPosts";

export const Posts: React.FC<{}> = () => {
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const [currentPage, setCurrentPage] = React.useState<number>(1);
	const [sortOrderById, setSortOrderById] = React.useState<"asc" | "desc">(
		"asc"
	);
	const postsPerPage: number = 10;
	const { isLoading, isError, data } = useSearchPostsQuery("");

	// * For sorting posts
	const toggleSortById = (): void => {
		setSortOrderById(sortOrderById === "asc" ? "desc" : "asc");
	};

	const sortPostsById = React.useCallback(
		(posts: Post[]) => {
			return posts
				.slice()
				.sort((a, b) => (sortOrderById === "asc" ? a.id - b.id : b.id - a.id));
		},
		[sortOrderById]
	);

	// * For filtration by value in input
	const filteredPosts: Post[] | undefined = data?.filter((post: Post) =>
		post.title.toLocaleLowerCase().includes(searchTerm.toLowerCase())
	);

	// * For pagination posts
	const indexOfLastPost: number = currentPage * postsPerPage;
	const indexOfFirstPost: number = indexOfLastPost - postsPerPage;

	const currentPosts = React.useMemo(() => {
		return filteredPosts
			? filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
			: [];
	}, [filteredPosts, indexOfFirstPost, indexOfLastPost]);

	const totalPages: number = filteredPosts
		? Math.ceil(filteredPosts.length / postsPerPage)
		: 0;

	const sortedPosts = React.useMemo(
		() => sortPostsById(currentPosts),
		[currentPosts, sortPostsById]
	);

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
		<>
			<NavigationPosts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

			{Array.isArray(currentPosts) && currentPosts.length ? (
				<TablePosts
					currentPosts={sortedPosts}
					sortOrderById={sortOrderById}
					toggleSortById={toggleSortById}
				/>
			) : (
				<p>Список постов пуст</p>
			)}

			<PaginationPosts
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
			/>
		</>
	);
};
