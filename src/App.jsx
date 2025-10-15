import { useState } from 'react' 
import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
       <Nav/>
       <Main/>
       <Gallery/>
       <Footer/>
       

       
    </>
  )
}

export default App
