import Navbar from "./Navbar"
export default function Header() {
  return (
    <header className="fixed bg-indigo-100 border-black xl:p-3 border-4 top-0 grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 justify-center xl:justify-start items-center w-full">
      <h1 className="text-black roboto-slab xl:col-span-2">Ebrahim | FullStack Engineer</h1>
      <Navbar />
    </header>
  )
}
