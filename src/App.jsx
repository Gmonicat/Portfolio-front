import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home'
import '../src/styles/background.scss'


//import Background from './components/Background'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <NavBar></NavBar>
        <section className="content">
          <Home>

          </Home>
        </section>

        <Footer></Footer>
        {/* <ParallaxBackground className="background"> 
      </ParallaxBackground> */}
      </div>
  )
}

export default App
