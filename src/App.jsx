import About from "./components/About"
import Credit from "./components/Credit"
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
      <Credit/>
    </div>
  )
}

export default App