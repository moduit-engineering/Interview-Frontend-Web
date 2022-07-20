import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/sidebar/sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frontend Web - Ocraniawan</title>
        <meta name="description" content="create by Ocraniawan Patattan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Sidebar />
        {/* content */}
      </div>
    </div>
  );
};

export default Home;
