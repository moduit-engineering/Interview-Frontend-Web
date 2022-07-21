import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "../pagination/pagination";

interface lisTable {
  data: any;
}

export default function Table(props: lisTable) {
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setColumns(props.data.columns);
    setRows(props.data.rows);
    setPageNumber(1);
  }, [props]);

  const handlePageSize = (e: any) => {
    setPageSize(e.target.value);
    setPageNumber(1);
  };

  const handlePageNumber = (page: number) => {
    setPageNumber(page);
  };
  return (
    <div className="p-4 ">
      <div className="bg-white rounded-2xl drop-shadow-2xl p-8">
        <div style={{ height: 450, width: "100%", display: "flex" }}>
          <DataGrid
            sx={{
              border: "0",
            }}
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            page={pageNumber - 1}
            // rowsPerPageOptions={[5]}
            getRowHeight={() => "auto"}
            hideFooter={true}
          />
        </div>
        {/* pagination */}
        <div className="flex justify-between pt-8">
          <div>
            <Pagination
              pageSize={pageSize}
              totalRecord={rows.length}
              page={pageNumber}
              handlePageNumber={handlePageNumber}
            />
          </div>
          <div>
            <span className="text-[#034EA1] mr-4">Show</span>
            <select
              onChange={(e) => handlePageSize(e)}
              className="border rounded-full p-2"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
