import React, { useState, useEffect } from "react";
import * as IoIcons from "react-icons/io5";

interface ListPagination {
  pageSize: number;
  totalRecord: number;
  page: number;
  handlePageNumber: any;
}

export default function Pagination(props: ListPagination) {
  const { pageSize, totalRecord, page, handlePageNumber } = props;
  const [indexPagination, setIndexPagination] = useState(1);
  const [pageNumbers, setPageNumbers] = useState<any>([]);
  const [totalPageNumber, setTotalPageNumber] = useState(
    Math.ceil(totalRecord / pageSize)
  );

  const pageNumber: any[] = [];
  for (let index = 1; index <= Math.ceil(totalRecord / pageSize); index++) {
    pageNumber.push(index);
    // due to haven't yet finish logic to handle show limit number of page, so I forced to stop looping after index reach 5
    if (index >= 5) {
      break;
    }
  }

  // this function should be used to initialization number of page at first render, but still need time to fixed the logic
  const handlePageNumbers = () => {
    const pageNumber: any[] = [];
    for (let index = 1; index <= Math.ceil(totalRecord / pageSize); index++) {
      pageNumber.push(index);
    }
    setPageNumbers(pageNumber);
    setIndexPagination(indexPagination + 5);
  };

  // this function should be used to go to the previous pages but still need time to fixed the logic
  const handleDecreasePage = () => {
    if (indexPagination <= 5) {
      return;
    }
  };

  // this function should be used to go to the next pages but still need time to fixed the logic
  const handleIncreasePage = () => {
    if (indexPagination >= totalPageNumber) {
      return;
    }
    const pageNumber: any[] = [];
    for (let index = indexPagination; index <= indexPagination + 5; index++) {
      pageNumber.push(index);
    }
    setPageNumbers(pageNumber);
  };

  return (
    <div>
      <div className="flex border rounded-full p-2 px-4 text-base text-center items-center">
        <div onClick={handleDecreasePage}>
          <IoIcons.IoCaretBackOutline />
        </div>
        {pageNumber &&
          pageNumber.map((pageNumber: any) => (
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
                <hr className="border-t-2 border-[#4986F2] mt-[2px]" />
              )}
            </div>
          ))}
        <div className="px-4">...</div>
        <div onClick={handleIncreasePage}>
          <IoIcons.IoCaretForwardOutline />
        </div>
      </div>
    </div>
  );
}
