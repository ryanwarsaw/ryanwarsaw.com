import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
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

      <main className="bg-white dark:bg-slate-900 grid grid-cols-6">
        <div className="col-start-2 col-end-3 flex flex-col">
          <div className="m-10 flex flex-col">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              layout="raw"
              unoptimized={true}
              width={200}
              height={200}
            />
            <div className="text-2xl pt-4 dark:text-white">Ryan Warsaw</div>
            <span className="text-gray-400 text-sm">Software Engineer</span>
            <span className="text-gray-400 text-sm">Bentonville, Arkansas</span>
            <div className="flex flex-col pt-10">
              <a
                href="https://github.com/ryanwarsaw"
                className="p-2 text-sm text-indigo-400 border-b"
              >
                GitHub Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/ryanwarsaw/"
                className="p-2 text-sm text-indigo-400 border-b"
              >
                LinkedIn Profile
              </a>
              <a
                href="mailto:me@ryanwarsaw.com"
                className="p-2 border-b text-sm text-indigo-400"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-6">
          <div className="flex flex-col items-center">
            <div className="">
              {resume?.length && resume.map((job) => <Card job={job} />)}
            </div>
          </div>
        </div>
        <FabButton />
      </main>
    </div>
  );
};

export default Home;
