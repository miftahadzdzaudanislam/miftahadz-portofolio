import { BsGithub } from "react-icons/bs";
import { FaBootstrap, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiPostman } from "react-icons/si";

export const techSkills = [
  {
    title: "Frontend",
    tech: [
      {
        techName: "Bootstrap",
        icon: FaBootstrap,
        colorClass: "bg-gradient-to-r from-[#7952B3] to-[#6366F1]",
      },
      {
        techName: "React",
        icon: FaReact,
        colorClass: "bg-[#61DAFB]",
      },
      {
        techName: "Tailwind",
        icon: RiTailwindCssFill,
        colorClass: "bg-[#06B6D4]",
      },
    ],
  },

  {
    title: "Backend",
    tech: [
      {
        techName: "PHP",
        icon: FaPhp,
        colorClass: "bg-[#777BB4]",
      },
      {
        techName: "Laravel",
        icon: FaLaravel,
        colorClass: "bg-gradient-to-r from-[#FF2D20] to-[#FF6B4A]",
      },

      {
        techName: "MySQL",
        icon: SiMysql,
        colorClass:
          "bg-gradient-to-r from-[#00758F] via-[#0EA5B7] to-[#F29111]",
      },
    ],
  },
  {
    title: "Tools",
    tech: [
      {
        techName: "Github",
        icon: BsGithub,
        colorClass: "bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white",
      },
      {
        techName: "Postman",
        icon: SiPostman,
        colorClass: "bg-[#FF6C37]",
      },
      {
        techName: "Figma",
        icon: FiFigma,
        colorClass:
          "bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE]",
      },
    ],
  },
];
