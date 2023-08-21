import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Service from "./components/Service"

const App = () => {
  return (
    <div className="app overflow-y-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
    </div>
  )
}

export default App