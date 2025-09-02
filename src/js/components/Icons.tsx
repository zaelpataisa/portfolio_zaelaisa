import { FaHome, FaBook, FaLaptopCode, FaGithub, FaLinkedin, FaInstagram, FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel, FaReact, FaJava, FaPython, FaRaspberryPi, FaUnity, FaVrCardboard } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { GiVenezuela } from "react-icons/gi";
import { GrProjects, GrMysql } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosColorPalette } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiJavascript, SiTypescript, SiArduino,SiMeta } from "react-icons/si";
import { TbAugmentedReality2 } from "react-icons/tb";


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

  FaHtml5: FaHtml5,                     // HTML
  FaCss3Alt: FaCss3Alt,                 // CSS
  FaBootstrap: FaBootstrap,             // Bootstrap
  RiTailwindCssFill: RiTailwindCssFill, // Tailwind
  SiPhp: SiPhp,                         // PHP
  FaLaravel: FaLaravel,                 // Laravel
  SiJavascript: SiJavascript,           // Javascript
  SiTypescript: SiTypescript,           // Typescript
  FaReact: FaReact,                     // React
  GrMysql: GrMysql,                     // MySQL
  FaJava: FaJava,                       // Java
  FaPython: FaPython,                   // Python
  SiArduino: SiArduino,                 // Arduino
  FaRaspberryPi: FaRaspberryPi,         // Raspberry
  FaUnity: FaUnity,                     // Unity
  SiMeta: SiMeta,                       // Meta Quest
  TbAugmentedReality2: TbAugmentedReality2, // Vuforia
  FaVrCardboard: FaVrCardboard,         // Cardboard
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