import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./Pages/Home"
import Product from "./Components/Product"
import ShowProduct from "./Pages/ShowProduct"
import Form from "./Pages/signUP/Form"
import Blank from "./Pages/Blank"
import NavBar from "./Components/NavBar"
import Sidebar from "./Components/Sidebar"
import PHome from "./Components/PHome"
import About from "./Pages/About"


function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<PHome/>}/>
          <Route path='/product/:id' element={<ShowProduct/>}/>
          <Route path='/signUP' element={<Form/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<Blank/>}/>
     </Routes>
     <Sidebar/>
     </BrowserRouter>
    </>
  )
}

export default App
