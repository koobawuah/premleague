import React from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { Layout, FixturesContainer, FixtureList } from "../components";

export async function getStaticProps() {
  const seasonyear = "2022";
  const leagueid = 39;
  const baseurl = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueid}&season=${seasonyear}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  const data = await fetch(baseurl, options);
  const rawFixtures = await data.json();
  const f = rawFixtures?.response.filter(
    (stat) => stat.fixture.status.short !== "FT"
  );
  const fixtures = rawFixtures;

  const teamsEp = `https:///api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2022`;
  const teamData = await fetch(teamsEp, options);
  const teams = await teamData.json();

  return {
    props: {
      fixtures,
      teams,
      f,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default function Home({ fixtures, teams, f }) {
  const datafix = fixtures?.response;
  const teamsData = teams?.response;
  const [arr, setArr] = React.useState([]);

  function addFixtureList() {
    setArr([...arr, Math.random() * 2000000000]);
  }

  function removeFixtureList() {
    arr.pop();
    setArr([...arr]);
  }

  return (
    <div className="">
      <Head>
        <title>Scoreboard - FixComp | Fixtures Analyzer </title>
        <meta name="description" content="We help you analyze your fixtures to understand and experience the game we love in a beautiful way!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3573939675911361"crossOrigin="anonymous" />

      <Layout>
        <div className="my-5">
          <div className="max-w-fit p-3 flex items-center bg-purple-700 border-transparent rounded-xl">
            <span className="px-2 py-1 mr-3 border-transparent rounded-full bg-white">
              <Image
                src={datafix[0].league.logo}
                width={40}
                height={40}
                layout="fixed"
                alt="EPL logo"
              />
            </span>
            <h1 className="font-black">Premier League</h1>
          </div>
        </div>


        <div className="w-full flex flex-row space-between">
          <div className="mt-6 flex">
            <button
              onClick={() => addFixtureList()}
              className="p-4 ml-4 text-xl font-bold text-white bg-slate-900"
            >
              + Add New Column
            </button>
          </div>

          <div className="mt-6 flex">
            <button
              onClick={() => removeFixtureList()}
              className="p-4 ml-4 text-xl font-bold text-white bg-slate-900"
            >
              - Close Last Column
            </button>
          </div>
        </div>

        <div className="flex space-x-10 overflow-x-scroll py-4">
          <FixturesContainer>
            {arr.length == 0
              ? addFixtureList()
              : arr.map((i, index) => (
                  <FixtureList
                    key={index}
                    data={f.length !== 0 ? datafix : f}
                    teamsData={teamsData}
                    name={i}
                  />
                ))}
          </FixturesContainer>
        </div>
      </Layout>
    </div>
  );
}

//deploy application online
//share and test application
