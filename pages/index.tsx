import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Table from "../components/table";
import QuestionsServices from "../services/questionsServices";

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

interface Row {
  id: number;
  title: string;
  description: string;
  footer: string;
}

export default function Home() {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    QuestionsServices.questionTwo()
      .then((res: any) => {
        setRows(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Frontend Web - Ocraniawan</title>
        <meta name="description" content="create by Ocraniawan Patattan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="mx-4 p-4 h-[74px] flex items-center justify-between">
          <span className="text-lg font-bold">Question 1</span>
        </div>
        <Table data={{ rows, columns }} />
      </div>
    </Layout>
  );
}
