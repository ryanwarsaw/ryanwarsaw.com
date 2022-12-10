import { Job } from "./types";

const resume: Job[] = [
  {
    title: "Software Engineer",
    company: "Autodesk",
    duration: "Oct 2022 - Present",
    location: "Remote",
    description: "Supporting the reports team in Autodesk's Construction Cloud division",
    logo: "/logos/autodesk.png",
    tags: [
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Docker"
    ]
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
