import React, { ReactNode } from "react";
import Image from "next/image";
import { Job } from "../misc/types";

type Props = { job: Job };

const Card = ({ job }: Props): JSX.Element => (
  <div className="bg-white max-w-4xl dark:bg-slate-800 overflow-hidden rounded-md shadow-md p-4 mt-6">
    <div className="flex justify-between">
      <div>
        <div className="font-bold text-xl dark:text-white">{job.title}</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          {[job.company, job.duration, job.location].join("\t•\t")}
        </div>
      </div>
      <div>
        <Image
          alt={`${job.company} logo`}
          src={job.logo}
          layout="raw"
          height={48}
          width={48}
          unoptimized={true}
          className="rounded-md"
        />
      </div>
    </div>
    <p className="text-gray-700 dark:text-gray-300 line-clamp-3 my-2">
      {job.description}
    </p>

    <div className="pt-1 truncate">
      {job.tags?.map((tag) => (
        <span className="inline-block bg-indigo-400 dark:bg-indigo-700 rounded-full px-3 py-1 text-sm font-semibold dark:text-white mr-2 mb-2">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Card;
