import { FaHome, FaBook, FaLaptopCode, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoIosColorPalette } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { GiVenezuela } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";



// eslint-disable-next-line react-refresh/only-export-components
export const IconMap = {
  FaBook: FaBook,                       // Knowledges
  FaLaptopCode: FaLaptopCode,           // Skills
  FaHome: FaHome,                       // About Me
  FaNetworkWired: FaNetworkWired,       // Works
  GrProjects: GrProjects,               // Projects
  IoIosColorPalette: IoIosColorPalette, // Colors
  MdLanguage: MdLanguage,               // Language

  GiVenezuela: GiVenezuela,             // Venezuela
  FaGithub: FaGithub,                   // Github logo
  FaLinkedin: FaLinkedin,               // Linkedin Logo
  FaInstagram: FaInstagram,             // Instagram Logo
  HiOutlineMail: HiOutlineMail,         // Mail
}

export type IconCode = keyof typeof IconMap;

interface IconSelectProps {
  iconCode: IconCode;
}

const IconSelect = ({iconCode}: IconSelectProps) => {
  const IconComponent = IconMap[iconCode];

  if (IconComponent) {
    return (
      <div className="icon-container">
        <IconComponent />
      </div>
    );
  }
  return null;
}
export default IconSelect;