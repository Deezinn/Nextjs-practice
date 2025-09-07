import { RiHome5Fill,RiApps2Fill} from "react-icons/ri";
import { FaRegCalendarAlt,FaBriefcase } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { MdAnalytics,MdOutlineReplay } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { GiDatabase,GiBugleCall } from "react-icons/gi";

export const firstGridElements = [
  {text: "Home", icon: <RiHome5Fill />},
  {text: "All content", icon: <RiApps2Fill />},
  {text: "Live events", icon: <FaRegCalendarAlt />},
  {text: "Ask amplitude", icon: <WiStars />},
]

export const secondGridElements = [
  {text: "Analytics", icon: <MdAnalytics />, dropdown: ['teste1', 'teste2']},
  {text: "Experience", icon: <FaBriefcase />, dropdown: ['teste1', 'teste2']},
  {text: "User profiles", icon: <FaUserGroup />},
  {text: "Session replay", icon: <MdOutlineReplay />},
]

export const thirdGridElements = [
  {text: "Data", icon: <GiDatabase />},
  {text: "Releases", icon: <GiBugleCall />},
]
