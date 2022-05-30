import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import Card from "../components/Card";
import FabButton from "../components/FabButton";
import resume from "../misc/resume";

const Home: NextPage = () => {
  // Sets the page theme on initial page load, if none is set
  // defaults to the user's browser preferred color scheme.
  useEffect(() => {
    const theme: string | null = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.classList.add(theme);
    } else {
      const prefersDark: boolean = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const theme = prefersDark ? "dark" : "light";
      localStorage.setItem("theme", theme);
      document.documentElement.classList.add(theme);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Ryan Warsaw</title>
        <meta
          name="description"
          content="Ryan Warsaw is a Software Engineer based out of Bentonville, Arkansas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-neutral-50 dark:bg-slate-900 lg:grid lg:grid-cols-8">
        <div className="lg:col-start-2 lg:col-end-4 pt-24 flex flex-col items-center">
          <div className="flex flex-col">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              layout="raw"
              unoptimized={true}
              width={200}
              height={200}
              className="rounded-full"
            />
            <div className="text-3xl pt-4 font-bold dark:text-white">
              Ryan Warsaw
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-md">
              Software Engineer
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-md">
              Bentonville, Arkansas
            </span>
            <div className="flex flex-row items-center">
              <a
                href="https://github.com/ryanwarsaw"
                className="inline text-md text-indigo-600 dark:text-indigo-400"
              >
                GitHub
              </a>
              <span className="p-1 text-gray-400">{"•"}</span>
              <a
                href="https://www.linkedin.com/in/ryanwarsaw/"
                className="inline text-md text-indigo-600 dark:text-indigo-400"
              >
                LinkedIn
              </a>
              <span className="p-1 text-gray-400">{"•"}</span>
              <a
                href="mailto:me@ryanwarsaw.com"
                className="inline text-md text-indigo-600 dark:text-indigo-400"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-start-4 lg:col-end-8">
          <div>
            <div className="lg:h-screen lg:overflow-scroll lg:scrollbar-hide flex-1 flex-col pt-20">
              {resume?.length && resume.map((job, index) => <Card key={index} job={job} />)}
            </div>
          </div>
        </div>
        <FabButton />
      </main>
    </div>
  );
};

export default Home;
