import { FaLaravel, FaReact } from "react-icons/fa";
import RelaoneContent from "@/contents/relaone.mdx?raw";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const projects = [
  {
    img: "/projects/relaone.png",
    title: "RelaOne - Volunteer App",
    desc: "RelaOne atau Volunteer Activity Manager merupakan platform berbasis web yang bertujuan membantu menghubungkan organisasi penyelenggara kegiatan sosial dengan para relawan (volunteer) yang bersedia berkontribusi dalam aktivitas masyarakat. Mereka dapat mencari, melihat detail kegiatan, serta mendaftar secara langsung tanpa harus melalui proses manual. Semua ini bertujuan untuk mempermudah koordinasi kegiatan sosial dan akses informasi.",
    link: "relaone",
    github: "https://github.com/firenzehiga/relaone-fe",
    website: "https://relaone.vercel.app/",
    content: RelaoneContent,
    tech: [
      {
        techName: "React",
        icon: FaReact,
        colorClass: "bg-[#61DAFB] text-black",
      },
      {
        techName: "Tailwind CSS",
        icon: RiTailwindCssFill,
        colorClass: "bg-[#22D3EE] text-black",
      },
      {
        techName: "MySQL",
        icon: SiMysql,
        colorClass:
          "bg-gradient-to-r from-[#0E7490] via-[#0E7490] to-[#F97316] text-white",
      },
      {
        techName: "Laravel",
        icon: FaLaravel,
        colorClass: "bg-[#B91C1C] text-white",
      },
    ],
  },
  {
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card Title 2",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts",
    link: "card-title-2",
    github: "",
    website: "",
    tech: [
      {
        icon: FaReact,
        colorClass: "bg-[#61DAFB] text-black",
      },
    ],
  },
  {
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card Title 3",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts",
    link: "card-title-3",
    github: "",
    website: "",
    tech: [
      {
        icon: FaReact,
        colorClass: "bg-[#61DAFB] text-black",
      },
    ],
  },
  {
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card Title 4",
    desc: "A card component has a figure, a body part, and inside body there are title and actions parts",
    link: "card-title-4",
    github: "",
    website: "",
    tech: [
      {
        icon: FaReact,
        colorClass: "bg-[#61DAFB] text-black",
      },
    ],
  },
];
