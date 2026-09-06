import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { Job } from "../misc/types";

type Props = { job: Job };

const Card = ({ job }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const descriptionId = useId();

  useEffect(() => {
    const description = descriptionRef.current;
    if (!description) return;

    // Compare the full text height with three lines even while expanded.
    // ResizeObserver also updates this when the card width or font changes.
    const observer = new ResizeObserver(() => {
      const lineHeight = parseFloat(getComputedStyle(description).lineHeight);
      setCanExpand(description.scrollHeight > lineHeight * 3 + 1);
    });
    observer.observe(description);
    return () => observer.disconnect();
  }, [job.description]);

  return (
    <article className="mb-4 max-w-4xl rounded-[14px] border border-edge bg-surface p-6">
      <div className="flex justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg leading-[1.4] font-semibold tracking-[-0.025em]">
            {job.title}
          </h2>
          <div className="mt-[0.35rem] text-xs leading-[1.7] text-muted">
            {[job.company, job.duration, job.location].join("\t•\t")}
          </div>
        </div>
        <div className="shrink-0">
          <Image
            alt={`${job.company} logo`}
            src={job.logo}
            height={48}
            width={48}
            unoptimized={true}
            className="rounded-[10px]"
          />
        </div>
      </div>
      <p
        ref={descriptionRef}
        id={descriptionId}
        className={`my-4 text-sm leading-[1.75] text-muted${
          expanded ? "" : " line-clamp-3"
        }`}
      >
        {job.description}
      </p>
      {/* Keep the control's space reserved before overflow is measured.
          Invisible controls are also excluded from focus and accessibility. */}
      <button
        type="button"
        className={`-mt-2 mb-4 block cursor-pointer py-1.5 text-[0.8125rem] font-medium text-accent underline-offset-4 hover:underline focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-accent${
          canExpand || expanded ? "" : " invisible"
        }`}
        aria-expanded={expanded}
        aria-controls={descriptionId}
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? "Show less" : "Show more"}
      </button>

      <div className="flex flex-wrap gap-2">
        {job.tags?.map((tag, index) => (
          <span
            key={index}
            className="rounded-md bg-tag px-[0.65rem] py-1 text-[0.6875rem] font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Card;
