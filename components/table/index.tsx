import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "../pagination/pagination";

const columns = [
  {
    field: "title",
    headerName: "Product Name",
    width: 250,
    editable: true,
    renderCell: (params: any) => {
      return (
        <div className="flex items-center">
          <div className="rounded-full bg-[#D6E9FF] text-blue-500 p-2 font-bold text-xs">
            NK
          </div>
          <div className="ml-4">{params.row.title}</div>
        </div>
      );
    },
  },
  {
    field: "id",
    headerName: "Product Code",
    width: 150,
    editable: true,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 350,
    editable: true,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 150,
    editable: true,
    renderCell: (params: any) => {
      return (
        <ul>
          {params.row &&
            params.row.tags &&
            params.row.tags.map((tag: any, idx: number) => (
              <li key={idx}>{tag}</li>
            ))}
        </ul>
      );
    },
  },
];

const rows = [
  {
    id: 891176,
    title: "Practical Rubber Gloves",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    footer: "Handmade",
    createdAt: "2022-07-20T06:17:14.9066568+00:00",
  },
  {
    id: 704017,
    category: 5,
    title: "Sleek Metal Chicken",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    footer: "Licensed",
    tags: ["Garden", "Music", "Clothing", "Home", "Music"],
    createdAt: "2022-07-20T00:30:26.3174522+00:00",
  },
  {
    id: 945931,
    category: 1,
    title: "Ergonomic Cotton Soap",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    footer: "Gorgeous",
    createdAt: "2022-07-19T19:08:15.4675636+00:00",
  },
  {
    id: 950429,
    title: "Licensed Rubber Computer",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    footer: "Tasty",
    tags: ["Industrial", "Computers", "Industrial", "Sports", "Books"],
  },
  {
    id: 834494,
    category: 2,
    title: "Incredible Concrete Bacon",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    footer: "Unbranded",
    createdAt: "2022-07-20T14:27:30.8410863+00:00",
  },
  {
    id: 171283,
    category: 1,
    title: "Small Plastic Gloves",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    footer: "Generic",
    createdAt: "2022-07-20T05:51:54.8327729+00:00",
  },
  {
    id: 220778,
    title: "Fantastic Cotton Salad",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    footer: "Rustic",
    tags: ["Baby", "Music", "Baby", "Electronics", "Garden"],
    createdAt: "2022-07-19T20:44:55.4977599+00:00",
  },
  {
    id: 90293,
    category: 10,
    title: "Handcrafted Metal Chips",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    footer: "Handcrafted",
  },
  {
    id: 607686,
    title: "Tasty Concrete Pizza",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    footer: "Gorgeous",
    tags: ["Books", "Home", "Baby", "Books", "Automotive"],
    createdAt: "2022-07-20T02:32:29.0912457+00:00",
  },
  {
    id: 379683,
    category: 6,
    title: "Refined Frozen Soap",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    footer: "Sleek",
    tags: ["Tools", "Computers", "Baby", "Kids", "Books"],
    createdAt: "2022-07-19T22:19:12.1842927+00:00",
  },
  {
    id: 995802,
    category: 1,
    title: "Practical Rubber Pants",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    footer: "Small",
    tags: ["Electronics", "Kids", "Industrial", "Jewelery", "Books"],
    createdAt: "2022-07-20T11:40:16.5385417+00:00",
  },
  {
    id: 560487,
    title: "Gorgeous Frozen Pants",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    footer: "Awesome",
    tags: ["Grocery", "Clothing", "Grocery", "Health", "Toys"],
    createdAt: "2022-07-19T18:11:52.9729689+00:00",
  },
  {
    id: 464572,
    category: 3,
    title: "Small Steel Shoes",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    footer: "Incredible",
    tags: ["Sports", "Music", "Tools", "Industrial", "Beauty"],
    createdAt: "2022-07-20T05:54:20.3743182+00:00",
  },
  {
    id: 962357,
    category: 5,
    title: "Incredible Steel Bacon",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    footer: "Practical",
    tags: ["Sports", "Health", "Automotive", "Automotive", "Kids"],
    createdAt: "2022-07-20T12:33:26.1771796+00:00",
  },
  {
    id: 610336,
    category: 1,
    title: "Handcrafted Plastic Chips",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    footer: "Licensed",
    tags: ["Books", "Baby", "Beauty", "Books", "Games"],
    createdAt: "2022-07-20T04:25:43.6693047+00:00",
  },
  {
    id: 191839,
    title: "Small Granite Bike",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    footer: "Intelligent",
  },
  {
    id: 883425,
    title: "Tasty Cotton Pizza",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    footer: "Sleek",
    tags: ["Garden", "Jewelery", "Shoes", "Books", "Automotive"],
  },
  {
    id: 924311,
    category: 6,
    title: "Incredible Soft Soap",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    footer: "Tasty",
    createdAt: "2022-07-19T20:30:26.7430714+00:00",
  },
  {
    id: 945344,
    category: 2,
    title: "Gorgeous Wooden Mouse",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    footer: "Handmade",
    tags: ["Beauty", "Garden", "Automotive", "Books", "Grocery"],
  },
  {
    id: 297947,
    category: 3,
    title: "Fantastic Fresh Chair",
    description: "The Football Is Good For Training And Recreational Purposes",
    footer: "Ergonomic",
  },
  {
    id: 892875,
    category: 10,
    title: "Small Steel Chicken",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    footer: "Ergonomic",
    tags: ["Electronics", "Movies", "Music", "Baby", "Movies"],
    createdAt: "2022-07-19T18:28:03.5821841+00:00",
  },
  {
    id: 237983,
    category: 3,
    title: "Incredible Steel Cheese",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    footer: "Refined",
    tags: ["Industrial", "Computers", "Shoes", "Home", "Outdoors"],
    createdAt: "2022-07-20T04:49:25.5187105+00:00",
  },
  {
    id: 330709,
    category: 8,
    title: "Licensed Wooden Shirt",
    description: "The Football Is Good For Training And Recreational Purposes",
    footer: "Fantastic",
    tags: ["Tools", "Baby", "Sports", "Grocery", "Books"],
    createdAt: "2022-07-19T22:44:43.5285214+00:00",
  },
  {
    id: 978135,
    title: "Practical Frozen Cheese",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    footer: "Gorgeous",
    tags: ["Jewelery", "Computers", "Clothing", "Music", "Garden"],
  },
  {
    id: 527357,
    category: 9,
    title: "Handmade Plastic Ball",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    footer: "Awesome",
    tags: ["Toys", "Sports", "Garden", "Baby", "Books"],
    createdAt: "2022-07-19T22:16:36.4027374+00:00",
  },
  {
    id: 427352,
    title: "Unbranded Plastic Table",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    footer: "Licensed",
    tags: ["Books", "Movies", "Kids", "Garden", "Clothing"],
    createdAt: "2022-07-19T21:00:35.9161493+00:00",
  },
  {
    id: 350035,
    category: 4,
    title: "Awesome Frozen Ball",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    footer: "Awesome",
    createdAt: "2022-07-19T18:17:08.5317661+00:00",
  },
  {
    id: 408870,
    category: 3,
    title: "Incredible Metal Shirt",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    footer: "Unbranded",
    tags: ["Health", "Computers", "Computers", "Tools", "Automotive"],
    createdAt: "2022-07-20T15:06:04.7020116+00:00",
  },
  {
    id: 974206,
    category: 2,
    title: "Handcrafted Plastic Table",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    footer: "Awesome",
    createdAt: "2022-07-20T15:07:49.0929613+00:00",
  },
  {
    id: 87714,
    category: 3,
    title: "Generic Frozen Shirt",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    footer: "Sleek",
    tags: ["Garden", "Games", "Jewelery", "Books", "Home"],
  },
];

export default function Table() {
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);

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
