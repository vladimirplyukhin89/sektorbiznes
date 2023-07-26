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
		<tbody className="flex flex-row justify-between mt-[16px]">
			{totalPages !== 0 && (
				<>
					<tr>
						<th>
							<button
								className="ms-[40px] font-medium text-2xl text-[#474955] hover:text-[#7EBC3C]"
								onClick={getPageBack}
							>
								Назад
							</button>
						</th>
					</tr>
					<tr>
						<th>
							<div className="flex">
								{Array.from(
									{ length: totalPages },
									(_, index: number) => index + 1
								).map((pageNumber: number) => (
									<div className="p-1" key={pageNumber}>
										<button
											onClick={() => handlePageChange(pageNumber)}
											className={
												currentPage === pageNumber ? "text-[#7EBC3C]" : ""
											}
										>
											<span className="font-semibold italic text-lg me-1 md:me-2 hover:text-[#7EBC3C]">
												{pageNumber}
											</span>
										</button>
									</div>
								))}
							</div>
						</th>
					</tr>
					<tr>
						<th>
							<button
								className="me-[40px] font-medium text-2xl text-[#474955] hover:text-[#7EBC3C]"
								onClick={getPageForward}
							>
								Далее
							</button>
						</th>
					</tr>
				</>
			)}
		</tbody>
	);
};
