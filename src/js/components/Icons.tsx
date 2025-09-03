import { FaBook, FaLaptopCode, FaGithub, FaLinkedin, FaInstagram, FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel, FaReact, FaJava, FaPython, FaRaspberryPi, FaUnity, FaVrCardboard, FaDatabase, FaRobot, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { GiVenezuela } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiJavascript, SiTypescript, SiArduino,SiMeta } from "react-icons/si";
import { TbAugmentedReality, TbAugmentedReality2 } from "react-icons/tb";
import { VscTerminalCmd } from "react-icons/vsc";


// eslint-disable-next-line react-refresh/only-export-components
export const IconMap = {
  FaBook: FaBook,                       // Knowledges

  GiVenezuela: GiVenezuela,             // Venezuela
  FaGithub: FaGithub,                   // Github logo
  FaLinkedin: FaLinkedin,               // Linkedin Logo
  FaInstagram: FaInstagram,             // Instagram Logo
  HiOutlineMail: HiOutlineMail,         // Mail
  FaLaptopCode: FaLaptopCode,           // Web Development
  FaDatabase: FaDatabase,               // Database managment
  VscTerminalCmd: VscTerminalCmd,       // Software Development
  FaRobot: FaRobot,                     // Electronics and Robotics
  TbAugmentedReality: TbAugmentedReality, // Inmersive Reality 

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
  FaAngleLeft: FaAngleLeft,             // Left
  FaAngleRight: FaAngleRight,           // Right
}

export type IconCode = keyof typeof IconMap;

interface IconSelectProps {
  iconCode: IconCode;
}

const IconSelect = ({iconCode}: IconSelectProps) => {
  const IconComponent = IconMap[iconCode];

  if (IconComponent) {
    return (
      <IconComponent />
    );
  }
  return null;
}
export default IconSelect;