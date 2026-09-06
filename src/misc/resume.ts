import { Job } from "./types";

const resume: Job[] = [
  {
    title: "Tech Lead, Forma Mobile Backend",
    company: "Autodesk",
    duration: "July 2026 - Present",
    location: "Remote",
    description:
      "Lead technical development of the backend services powering Autodesk's Forma Mobile application.",
    logo: "/logos/autodesk.png",
    tags: [
      "Technical Leadership",
      "System Architecture",
      "Mobile",
      "Multi-Region Deployment",
      "FedRAMP",
    ],
  },
  {
    title: "Tech Lead, Forma Reports",
    company: "Autodesk",
    duration: "April 2025 - July 2026",
    location: "Remote",
    description:
      "Led a team of eight engineers and owned technical direction for Forma Reports. Coordinated improvements across teams to deliver higher-quality report imagery, including upgrades to image processing and migration of existing photos. Resolved complex PDF generation, scaling, and analytical database performance issues. Worked with the architecture council to address reliability, data access, and service capacity constraints. Led regionalization work for a program targeting five simultaneous regional deployments and contributed to engineering work toward FedRAMP compliance.",
    logo: "/logos/autodesk.png",
    tags: [
      "Technical Leadership",
      "System Architecture",
      "Performance",
      "Multi-Region Deployment",
      "FedRAMP",
    ],
  },
  {
    title: "Senior Software Engineer, Reports",
    company: "Autodesk",
    duration: "April 2024 - April 2025",
    location: "Remote",
    description:
      "Scaled reporting services to meet growing demand, took on DevOps responsibilities, and delivered product features end to end. Led work to make services deployable across regions, supporting Forma Construction's expansion to an Australian data center. Established coding guidance and built automated checks to catch region-specific assumptions, making future regional deployments easier.",
    logo: "/logos/autodesk.png",
    tags: [
      "DevOps",
      "Scalability",
      "Multi-Region Deployment",
      "Developer Tooling",
    ],
  },
  {
    title: "Software Engineer, Reports",
    company: "Autodesk",
    duration: "Oct 2022 - April 2024",
    location: "Remote",
    description:
      "Led a year-long consolidation of two reporting services into a single platform with zero downtime and no user incidents. Designed the migration path and incrementally migrated data and features supporting Autodesk Construction Cloud (now Forma) and BIM360 Reports. Delivered a separate PostgreSQL database migration with zero downtime, alongside product features and usability improvements.",
    logo: "/logos/autodesk.png",
    tags: ["TypeScript", "JavaScript", "PostgreSQL", "Docker"],
  },
  {
    title: "Lead Software Engineer",
    company: "Edify, Inc",
    duration: "Oct 2021 - Oct 2022",
    location: "Remote",
    description:
      "Responsible for the development and maintenance of our technical stack. Working closely with product to develop a roadmap and deliver customer value in a timely fashion.",
    logo: "/logos/edify.png",
    tags: [
      "TypeScript",
      "Serverless",
      "SQL",
      "Amazon Web Services",
      "Slack Bot",
    ],
  },
  {
    title: "Autocare Technican",
    company: "Walmart Stores",
    duration: "May 2020 - Oct 2021",
    location: "Pineville, MO",
    description:
      "Serviced over 3,000 vehicles, of every make and model. With no priority industry experience, I became certified and maintained an average vehicle count of 11.5 vehicles per day. Completed work with speed and precision, routinely supported the business becoming proficient in service writing, and department management activities in addition to my core responsibilities as a technician.",
    logo: "/logos/walmart.png",
    tags: ["Automotive", "Customer Service", "Vehicle Maintenance"],
  },
  {
    title: "Software Engineering Contractor",
    company: "Consumer Reports",
    duration: "Aug 2019 - Dec 2019",
    location: "Remote",
    description: "Developed internal tooling for the Digital Labs team.",
    logo: "/logos/consumer_reports.png",
    tags: ["Javascript", "React", "Firebase", "Web Extensions"],
  },
  {
    title: "Software Engineer",
    company: "Enki Labs, Inc",
    duration: "March 2018 - July 2019",
    location: "Remote",
    description:
      "Helped develop two new products that utilized our existing content stack. EnkiBot is a skills mentor that lives in Slack. EnkiCamp is a remote interactive SQL crash-course for busy professionals. I worked with the MERN (Mongo, Express, React, Node) stack and helped maintain serverless infrastructure on AWS.",
    logo: "/logos/enki.png",
    tags: [
      "Javascript",
      "React",
      "MongoDB",
      "Amazon Web Services",
      "Slack Bot",
    ],
  },
  {
    title: "Software Engineering Contractor",
    company: "International Rescue Committee",
    duration: "April 2018 - Nov 2018",
    location: "Remote",
    description:
      "Developed two educational Android apps for field research purposes in Tanzania. Each app featured a JSON content management system with extensible question types and quizzes support. They also supported offline video playback and distribution, as well as an offline data analytics solution due to lack of internet access in the field.",
    logo: "/logos/irc.png",
    tags: ["Java", "Android", "App Development"],
  },
  {
    title: "Developer Engagement Intern",
    company: "Mozilla Foundation",
    duration: "Sept 2016 - Jan 2017",
    location: "Remote",
    description:
      "Maintained an Android app called Jisort! for the Digital Skills Observatory initiative -- which looks at the impact of digital skills on the usage of Digital Financial Services in developing countries. Jisort! taught basic skills such as connecting to Wi-Fi, and helped diagnose common user device problems.",
    logo: "/logos/mozilla.png",
    tags: ["Java", "Android", "Open Source", "Community Engagement"],
  },
];

export default resume;
