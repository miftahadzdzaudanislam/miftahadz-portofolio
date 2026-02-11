import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const contacts = [
  {
    social: "Email",
    link: "mailto:miftahdzaudan@gmail.com",
    icon: MdEmail,
    color: "bg-[#EA4335]",
  },
  {
    social: "Instagram",
    link: "https://instagram.com/mfthadz_",
    icon: FaInstagram,
    color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
  },
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/miftah-adz-dzaudan-i-682616293/",
    icon: BsLinkedin,
    color: "bg-[#0A66C2]",
  },
  {
    social: "Github",
    link: "https://github.com/miftahadzdzaudanislam",
    icon: BsGithub,
    color: "bg-[#181717]",
  },
];
