const LINKS = [
    {
        url: "https://www.linkedin.com/in/chicory-roth/",
        text: "LinkedIn"
    },{
        url: "/resume.pdf",
        text: "Resume"
    }
]

export default function Links() {
  return (
    <div>
      {LINKS.map((link) =>{
        return (
            <><a className="underline hover:text-slate-50"
            href={link.url}>{link.text}</a>{" "}</>
        );
      })}
    </div>
  )
};
