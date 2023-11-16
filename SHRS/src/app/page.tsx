import About from "./components/about";
import Home from "./components/home";
import Work from "./components/work";


export default function Page() {
  return (
    <main className=" h-[3000px] flex-col justify-center pt-36 md:pt-28">
      <Home />
      <About />
      <Work />
    </main>
  )
}
