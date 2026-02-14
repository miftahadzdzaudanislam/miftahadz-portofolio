import { BsGithub } from "react-icons/bs";
import {
  FaBootstrap,
  FaLaravel,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiMysql,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiGo,
  SiJavascript,
  SiJira,
  SiAxios,
  SiVite,
  SiPhp,
  SiGit,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { ImOffice } from "react-icons/im";

export const techSkills = [
  {
    title: "Frontend",
    tech: [
      {
        techName: "HTML",
        icon: FaHtml5,
        colorClass: "bg-[#F97316] text-white",
      },
      {
        techName: "CSS",
        icon: FaCss3Alt,
        colorClass: "bg-[#3B82F6] text-white",
      },
      {
        techName: "React",
        icon: FaReact,
        colorClass: "bg-[#61DAFD] text-black",
      },
      {
        techName: "Tailwind CSS",
        icon: RiTailwindCssFill,
        colorClass: "bg-[#22D3EE] text-black",
      },
      {
        techName: "Bootstrap",
        icon: FaBootstrap,
        colorClass: "bg-[#7C3AED] text-white",
      },
      {
        techName: "JavaScript",
        icon: SiJavascript,
        colorClass: "bg-[#F7DF1E] text-black",
      },
    ],
  },

  {
    title: "Backend",
    tech: [
      {
        techName: "Laravel",
        icon: FaLaravel,
        colorClass: "bg-[#B91C1C] text-white",
      },
      {
        techName: "PHP",
        icon: SiPhp,
        colorClass: "bg-[#777BB4] text-white",
      },
      {
        techName: "MySQL",
        icon: SiMysql,
        colorClass: "bg-gradient-to-r from-[#0E7490] via-[#0E7490] to-[#F97316] text-white",
      },
      {
        techName: "Express.js",
        icon: SiExpress,
        colorClass: "bg-[#000000] text-white",
      },
      {
        techName: "Node.js",
        icon: FaNodeJs,
        colorClass: "bg-[#16A34A] text-white",
      },
      //   {
      //     techName: "Go",
      //     icon: SiGo,
      //     colorClass: "bg-[#00ADD8] text-white",
      //   },
      {
        techName: "REST API",
        icon: TbApi,
        colorClass: "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white",
      },
      {
        techName: "Axios",
        icon: SiAxios,
        colorClass: "bg-[#5A29E4] text-white",
      },
    ],
  },

//   {
//     title: "Database",
//     tech: [
//       {
//         techName: "MySQL",
//         icon: SiMysql,
//         colorClass: "bg-gradient-to-r from-[#0E7490] via-[#0E7490] to-[#F97316] text-white",
//       },
//       //   {
//       //     techName: "MongoDB",
//       //     icon: SiMongodb,
//       //     colorClass: "bg-[#47A248] text-white",
//       //   },
//     ],
//   },

  {
    title: "DevOps & Tools",
    tech: [
      {
        techName: "Github",
        icon: BsGithub,
        colorClass: "bg-[#181717] text-white",
      },
      {
        techName: "Git",
        icon: SiGit,
        colorClass: "bg-[#F05033] text-white",
      },
      //   {
      //     techName: "Docker",
      //     icon: FaDocker,
      //     colorClass: "bg-[#2496ED] text-white",
      //   },
      {
        techName: "Postman",
        icon: SiPostman,
        colorClass: "bg-[#FF6C37] text-white",
      },
      {
        techName: "Figma",
        icon: FiFigma,
        colorClass:
          "bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] text-white",
      },
      {
        techName: "Jira",
        icon: SiJira,
        colorClass: "bg-[#0052CC] text-white",
      },
    //   {
    //     techName: "Microsoft Office",
    //     icon: ImOffice,
    //     colorClass: "bg-[#D83B01] text-white",
    //   },
    ],
  },
];
