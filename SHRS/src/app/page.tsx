import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Work from "./components/work";


export default function Page() {
  return (
    <main className="flex-col justify-center items-center">
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
