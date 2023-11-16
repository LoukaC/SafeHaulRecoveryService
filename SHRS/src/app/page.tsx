import About from "./components/about";
import Home from "./components/home";


export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center pt-36 md:pt-28">
      <Home />
      <About />
    </main>
  )
}
