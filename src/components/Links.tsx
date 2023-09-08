
const LINKS = [
    {
        url: "https://www.linkedin.com/in/chicory-roth/",
        text: "LinkedIn",
        newTab: true,
    },{
        url: "/resume",
        text: "Resume",
        newTab: false,
    },{
      url: "https://github.com/chicoryr",
        text: "Github",
        newTab: true,
    },{
      url: "/projects",
        text: "Projects",
        newTab: false,
    }
]



export default function Links() {
  return (
    <div className="flex">
      {LINKS.map((link, i) =>{
        return (
            <><a className="transition-all underline hover:text-slate-50 hover:tracking-wide p-2"
            key={i}
            target={link.newTab ? "_blank" : ""}
            href={link.url}>{link.text}</a>{" "}</>
        );
      })}
    </div>
  )
};
