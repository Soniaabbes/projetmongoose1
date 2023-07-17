import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./Components/NavBar"

import Home from './Components/Home'
import Contact from'./Components/Contact'
import ListContact  from './Components/ListContact';
import Notfound from './Components/Notfound';
import AddEdit from './Components/AddEdit';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return ( <BrowserRouter>
    <div className="App">
    <NavBar/>
      <Routes>
    <Route path="/" element= {<Home/>} />
    <Route  path= "/Contact" element= {<Contact/>}/>
    <Route path= "/ListContact" element= {<ListContact/>} />
    <Route path = "/*" element={<Notfound/>}  />
    <Route   path='/Edit' element ={<AddEdit/>}  />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
