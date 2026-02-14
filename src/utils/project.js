import { FaLaravel, FaReact } from "react-icons/fa";
import RelaoneContent from "@/contents/relaone.mdx?raw";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";

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
        colorClass: "bg-[#61DAFD] text-black",
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
    img: "/projects/remindmev2.png",
    title: "RemindMe - Task & Schedule Reminder System",
    desc: "RemindMe v2 adalah aplikasi web yang dirancang khusus untuk membantu mahasiswa mengelola tugas dan jadwal kuliah. Dengan fitur notifikasi otomatis ke Email, kamu tidak akan pernah lupa deadline lagi!",
    link: "remindme",
    github: "https://github.com/miftahadzdzaudanislam/remindme-fe",
    website: "https://remindmev2.vercel.app/",
    // content: RelaoneContent,
    tech: [
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
    img: "/projects/itrack.png",
    title: "ITrack - UI/UX Design for Campus Activity Monitoring Platform",
    desc: "ITrack adalah prototype UI/UX yang dirancang untuk memudahkan mahasiswa melihat dan mengikuti kegiatan kampus dalam satu platform terpusat. Prototype ini menampilkan alur navigasi yang sederhana, tampilan bersih, serta fitur utama untuk menelusuri dan memantau event agar informasi kegiatan lebih mudah diakses dan dipahami oleh pengguna.",
    link: "itrack",
    website:
      "https://www.figma.com/proto/tsCZNOCOd2KyCe8VcQCULN/ITrack?node-id=638-4121&t=UcEpWIMQwGEkjosE-1&scaling=scale-down&page-id=19%3A2&starting-point-node-id=428%3A1119&show-proto-sidebar=1",
    // content: RelaoneContent,
    tech: [
      {
        techName: "Figma",
        icon: FiFigma,
        colorClass:
          "bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] text-white",
      },
    ],
  },
  {
    img: "/projects/pocard.png",
    title: "PoCard - Pokémon TCG Price Guide",
    desc: "A simple web app to view, search, and manage your Pokémon Trading Card Game (TCG) collection.",
    link: "pocard",
    website:
      "https://pocard-eosin.vercel.app/",
    github: "https://github.com/miftahadzdzaudanislam/pocard",
    // content: RelaoneContent,
    tech: [
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
    ],
  },
  {
    img: "/projects/anaksehat.png",
    title: "AnakSehat - Aplikasi Web Monitoring Kesehatan Anak",
    desc: "AnakSehat adalah aplikasi digital yang dirancang untuk membantu orang tua dan ibu muda dalam meningkatkan kesadaran akan kesehatan dan tumbuh kembang anak melalui informasi, edukasi, dan dukungan yang terintegrasi dalam satu platform.",
    link: "anak-sehat",
    github: "https://github.com/Ryandra-TI01/AnakSehat",
    // content: RelaoneContent,
    tech: [
      {
        techName: "Laravel",
        icon: FaLaravel,
        colorClass: "bg-[#B91C1C] text-white",
      },
      {
        techName: "MySQL",
        icon: SiMysql,
        colorClass:
          "bg-gradient-to-r from-[#0E7490] via-[#0E7490] to-[#F97316] text-white",
      },
    ],
  },
];
