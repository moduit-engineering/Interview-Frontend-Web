import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Table from "../components/table";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Frontend Web - Ocraniawan</title>
        <meta name="description" content="create by Ocraniawan Patattan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="p-4 ">
          <span className="text-lg font-bold">Question 1</span>
        </div>
        <Table />
      </div>
    </Layout>
  );
};

export default Home;
