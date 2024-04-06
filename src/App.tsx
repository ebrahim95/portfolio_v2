import './App.css'
// import Header from './components/Header.tsx';
import './components/Particles'
import ParticlesBackground from './components/Particles.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import Story from './pages/Story.tsx';

//TODO add icons to footer  and links
//TODO add values sections
//TODO style the story more
//TODO <a href="https://www.flaticon.com/free-icons/bird" title="bird icons">Bird icons created by Freepik - Flaticon</a>

const text_for_project_card = [{
  heading: "Tailwind CSS Generator",
  detail: "A Tailwind CSS component generator that helps you prototype quickly.",
  stack: ["Svelte", "Typescript", "Tailwind CSS"],
  git_link: "https://github.com/ebrahim95/tailwindcss_generator",
  demo_link: "https://ebrahim95.github.io/tailwindcss_generator/"
}, {
  heading: "Bloglist Application ",
  detail: "A application to store you favorite blogs posts where other users can like and comment on the blog post.",
  stack: ["React", "Node.JS", "Redux"],
  git_link: "https://github.com/ebrahim95/practice-projects/tree/main/bloglist",
  demo_link: ""
}, {
  heading: "Gmail AI Summarizer | WIP",
  detail: "Takes all your emails and summarizes them into a summary.",
  stack: ["Python", "Gemini", "RAG"],
  git_link: "https://github.com/ebrahim95/ai_email_organizer",
  demo_link: ""
}, {
  heading: "Auction Website",
  detail: "A website that enables you to aunction items.",
  stack: ["NextJS", "PlanetScale", "OAuth", "Tailwind"],
  git_link: "https://github.com/chingu-voyages/v45-tier3-team-46",
  demo_link: "https://v45-tier3-team-46-lbe8sys3f-trio-coders.vercel.app/"
}]

const skills_tags: string[] = ["CSS", "HTML", "NextJS", "React", "JavaScript", "Typescript", "Python", "Node", "Express", "MongoDB", "RestAPI", "Git"]


function App() {
  return (
    <main className='font-sans'>
      <ParticlesBackground />
      <div id="layout" className="w-dvw pt-20 pb-40">
        <div id="container" className="xl:w-5/12 md:w-7/12 w-8/12 mx-auto">
          <section id="profile" className="flex flex-col gap-5 items-start mx-auto mb-2 bg-white/50">
            <div>
              <h1 className="roboto-slab">Hello!,</h1>
              <h2>I am Ebrahim, a Fullstack engineer who enjoys building and learning new things.</h2>
            </div>
            {/* <figure> */}
            {/*   <img src="" className="border-black border-4 bg-indigo-500/50 w-full h-5/6 mb-2 p-2" /> */}
            {/* </figure> */}

            <div id="social-media">
              <h2 className="roboto-slab mb-1">Social Media</h2>
              <div className="flex content-start items-center gap-3">
                <button><a href="https://github.com/ebrahim95">Github</a></button>
                <button><a href="https://www.linkedin.com/in/ebrahim-haji/">LinkedIn</a></button>
                <button><a href="https://twitter.com/ebstheace">Twitter</a></button>
              </div>
            </div>
            <div >
              <h2 className="roboto-slab mb-1">Skills</h2>
              <div id="skills" className="flex flex-wrap items-start content-start w-12/12">
                {skills_tags.map(skill => <text className="text_style">{skill}</text>)}
              </div>
            </div>

          </section>
          <section className="mb-2">
            <h1 className="text-black roboto-slab">Projects</h1>
            {text_for_project_card.map(({ heading, detail, stack, git_link, demo_link }) => {
              return (
                <ProjectCard heading={heading} detail={detail} stack={stack} git_link={git_link} demo_link={demo_link} />)
            })}
          </section>
          <Story />

        </div>

      </div >
    </main >
  );

}

export default App
