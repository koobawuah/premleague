import Head from "next/head";
import { Layout } from "../components";

const Scoreboard = () => {
  return (
    <Layout>
      <Head>
        <title>Scoreboard - FixComp | Fixtures Analyzer </title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3573939675911361"
     crossOrigin="anonymous"></script>
      </Head>
      <div className="w-full h-[800px] flex flex-col justify-center items-center">
        <h2 className="text-2xl text-white font-bold"> Scoreboard </h2>
        <p className="text-lg text-white font-normal"> Launching soon - v2</p>
      </div>
    </Layout>
  );
};

export default Scoreboard;
