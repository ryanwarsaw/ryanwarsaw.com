import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import resume from "../misc/resume";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ryan Warsaw</title>
        <meta
          name="description"
          content="Ryan Warsaw is a Tech Lead at Autodesk, leading the Forma Mobile backend team, based in Bentonville, Arkansas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-svh lg:grid lg:grid-cols-8">
        <div className="flex flex-col items-center px-6 pt-14 lg:col-start-2 lg:col-end-4 lg:pt-24">
          <div className="flex flex-col">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              unoptimized={true}
              width={200}
              height={200}
              className="rounded-full border-5 border-surface outline outline-edge"
            />
            <h1 className="mt-6 mb-[0.35rem] text-[2rem] leading-[1.2] font-semibold tracking-[-0.055em]">
              Ryan Warsaw
            </h1>
            <span className="text-[0.9375rem] text-muted">
              Tech Lead at Autodesk
            </span>
            <span className="text-[0.9375rem] text-muted">
              Bentonville, Arkansas
            </span>
            <div className="mt-[1.15rem] flex flex-row items-center gap-[0.65rem] text-sm leading-[inherit] font-medium [&_span]:text-edge [&_a]:text-accent [&_a]:underline [&_a]:decoration-transparent [&_a]:underline-offset-5 [&_a]:transition-[text-decoration-color] [&_a]:duration-150 [&_a]:ease-[ease] [&_a:hover]:decoration-current [&_a:focus-visible]:rounded-xs [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-5 [&_a:focus-visible]:outline-accent motion-reduce:[&_a]:transition-none">
              <a href="https://github.com/ryanwarsaw">GitHub</a>
              <span aria-hidden="true">/</span>
              <a href="https://www.linkedin.com/in/ryanwarsaw/">LinkedIn</a>
              <span aria-hidden="true">/</span>
              <a href="mailto:me@ryanwarsaw.com">Email</a>
            </div>
          </div>
        </div>
        <div className="lg:col-start-4 lg:col-end-8">
          <div>
            <div className="mx-auto max-w-[44rem] px-5 pt-12 pb-8 lg:mx-0 lg:h-screen lg:max-w-none lg:overflow-y-auto lg:px-1 lg:pt-24 lg:pb-12 lg:scrollbar-hide">
              {resume?.length &&
                resume.map((job, index) => <Card key={index} job={job} />)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
