import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { Paginationtype } from "../utils/types";
import { useContext } from "react";
import PageContext from "../context/PageContext";

const CustomPagination = (props: Paginationtype) => {
  const { totalPages, onPageChange } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { setPage } = useContext(PageContext);

  const handlePageChange = (page: number) => {
    setPage(page);
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <Pagination>
      <Pagination.Prev
        className="ms-auto"
        onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
      >
        Previous
      </Pagination.Prev>

      <Pagination.Next
        onClick={() =>
          handlePageChange(
            currentPage < totalPages ? currentPage + 1 : totalPages
          )
        }
      >
        Next
      </Pagination.Next>
    </Pagination>
  );
};

export default CustomPagination;
