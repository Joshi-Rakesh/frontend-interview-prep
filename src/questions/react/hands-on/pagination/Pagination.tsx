import { Button } from "antd";
import { getPageNumbers } from "./utils/paginationUtils";
import type { PaginationProps } from "./interface";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex flex-col items-center gap-4 justify-center p-4">
      <div className="flex items-center justify-center flex-wrap gap-1">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >{`<`}</Button>
        {pageNumbers.map((page, index) => {
          if (page === ". . .") {
            return <span key={`dots-${index}`}>{". . ."}</span>;
          }
          return (
            <Button
              key={page}
              color={currentPage === page ? "primary" : "default"}
              variant={currentPage === page ? "solid" : "outlined"}
              onClick={() => onPageChange(Number(page))}
            >
              {page}
            </Button>
          );
        })}
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >{`>`}</Button>
      </div>
    </div>
  );
};

export default Pagination;
