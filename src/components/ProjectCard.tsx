interface props {
  heading?: string
  detail?: string
  stack?: string[]
  git_link?: string
  demo_link?: string
}

const button_style = "my-1 xl:w-5/12"
export default function ProjectCard({ heading, detail, stack, git_link, demo_link }: props) {
  //TODO Card
  return (
    <div id="project_card" className="text-black mx-auto my-4 w-full border-4 border-black bg-white/75 grid xl:grid-cols-4">
      <div id="info" className="bg-indigo-200 p-3 border-b-2 xl:border-r-2 xl:border-b-0 border-black row-span-3 xl:col-span-3 xl:row-span-1 flex flex-col gap-2 items-start">
        <h2>{heading}</h2>
        <p>{detail}</p>
        <div className="flex flex-wrap">
          {stack?.map(s => <text className="text_style">{s}</text>)}
        </div>
      </div>
      <div id="links" className="flex xl:flex-col gap-4 xl:gap-1 xl:justify-center xl:items-center items-start p-3">
        {git_link === "" ? "" : <button className={`${button_style}`}><a href={`${git_link}`}>Github</a></button>}
        {demo_link === "" ? "" : <button className={`${button_style}`}> <a href={`${demo_link}`}>Demo</a></button>}
      </div>
    </div >
  )
}
