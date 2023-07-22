import React from "react";

interface IProps {
	currentPage: number;
	totalPages: number;
	handlePageChange: (pageNumber: number) => void;
}

export const PaginationPosts: React.FC<IProps> = ({
	currentPage,
	totalPages,
	handlePageChange,
}) => {
	return (
		<div className="flex justify-center">
			{Array.from({ length: totalPages }, (_, index: number) => index + 1).map(
				(pageNumber: number) => (
					<div className="p-1">
						<button
							key={pageNumber}
							onClick={() => handlePageChange(pageNumber)}
							className={currentPage === pageNumber ? "text-green-500" : ""}
						>
							{pageNumber}
						</button>
					</div>
				)
			)}
		</div>
	);
};
