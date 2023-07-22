import React from "react";

interface IProps {
	currentPage: number;
	totalPages: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginationPosts: React.FC<IProps> = ({
	currentPage,
	totalPages,
	setCurrentPage,
}) => {
	const handlePageChange = (pageNumber: number): void => {
		setCurrentPage(pageNumber);
	};

	const getPageForward = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const getPageBack = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	return (
		<footer className="flex justify-between">
			<button className="ms-[40px]" onClick={getPageBack}>
				Назад
			</button>
			<div className="flex">
				{Array.from(
					{ length: totalPages },
					(_, index: number) => index + 1
				).map((pageNumber: number) => (
					<div className="p-1" key={pageNumber}>
						<button
							onClick={() => handlePageChange(pageNumber)}
							className={currentPage === pageNumber ? "text-green-500" : ""}
						>
							{pageNumber}
						</button>
					</div>
				))}
			</div>
			<button className="me-[40px]" onClick={getPageForward}>
				Далее
			</button>
		</footer>
	);
};
