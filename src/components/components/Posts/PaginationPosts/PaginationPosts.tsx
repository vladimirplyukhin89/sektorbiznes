import React from "react";

interface IProps {
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	totalPages: number;
}

export const PaginationPosts: React.FC<IProps> = ({
	currentPage,
	setCurrentPage,
	totalPages,
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
		<>
			{totalPages !== 0 && (
				<footer className="flex justify-between mt-[16px]">
					<button
						className="ms-[40px] font-medium text-2xl text-[#474955] hover:text-[#7EBC3C]"
						onClick={getPageBack}
					>
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
									<span className="font-semibold italic text-lg me-1 md:me-2">
										{pageNumber}
									</span>
								</button>
							</div>
						))}
					</div>
					<button
						className="me-[40px] font-medium text-2xl text-[#474955] hover:text-[#7EBC3C]"
						onClick={getPageForward}
					>
						Далее
					</button>
				</footer>
			)}
		</>
	);
};
