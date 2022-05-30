import React from "react";
import Image from "next/image";
import { Job } from "../misc/types";

type Props = { job: Job };

const Card = ({ job }: Props) => (
  <div className="max-w-3xl bg-white dark:bg-slate-800 overflow-hidden rounded-md shadow-lg p-4 my-6">
    <div className="flex justify-between">
      <div>
        <div className="font-bold text-xl dark:text-white">{job.title}</div>
        <div className="text-gray-400  text-sm">
          {[job.company, job.duration, job.location].join("\t•\t")}
        </div>
      </div>
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
    <div className="text-gray-700 dark:text-gray-300 py-2 text-base">{job.description}</div>

    <div className="pt-1">
      {job.tags?.map((tag) => (
        <span className="inline-block bg-indigo-50 dark:bg-indigo-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white mr-2 mb-2">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Card;
