import React from "react";

interface ListPagination {
  pageSize: number;
  totalRecord: number;
  page: number;
  handlePageNumber: any;
}

export default function pagination(props: ListPagination) {
  const pageNumbers = [];
  const { pageSize, totalRecord, page, handlePageNumber } = props;

  for (let index = 1; index <= Math.ceil(totalRecord / pageSize); index++) {
    pageNumbers.push(index);
  }

  return (
    <div>
      <div className="flex border rounded-full p-2 pb-0 text-base text-center">
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className="px-2 cursor-pointer w-12"
            onClick={() => handlePageNumber(pageNumber)}
          >
            <span
              className={page === pageNumber ? "font-bold " : "font-normal"}
            >
              {pageNumber}
            </span>
            {page === pageNumber && (
              <hr className="border-t-2 border-[#4986F2] mt-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
