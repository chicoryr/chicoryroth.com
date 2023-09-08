import {BsLinkedin, BsFillFileEarmarkTextFill, BsGithub} from "react-icons/bs";
import {GoProjectSymlink} from "react-icons/go";

const LINKS = [
    {
        url: "https://www.linkedin.com/in/chicory-roth/",
        text: "LinkedIn",
        newTab: true,
        icon: <BsLinkedin size="4em"/>
    },{
        url: "/resume",
        text: "Resume",
        newTab: false,
        icon: <BsFillFileEarmarkTextFill size="4em"/>
    },{
      url: "https://github.com/chicoryr",
        text: "Github",
        newTab: true,
        icon: <BsGithub size="4em"/>
    },{
      url: "/projects",
        text: "Projects",
        newTab: false,
        icon: <GoProjectSymlink size="4em"/>
    }
]



export default function Links() {
  return (
    <div className="flex">
      {LINKS.map((link) =>{
        return (
            <><a className="transition-all underline hover:text-slate-50 hover:tracking-wide p-2"
            target={link.newTab ? "_blank" : ""}
            href={link.url}>{link.icon ? link.icon : link.text}</a>{" "}</>
        );
      })}
    </div>
  )
};
