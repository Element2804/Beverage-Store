
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
//header
// import NavTabs from './components/NavTabs/NavTabs';
//pages
import Home from './pages/Home';
import Drinks from './pages/Drinks';


function App() {
 return (  
     <BrowserRouter>
     <header>
      <nav>
        <h1>GulpCo</h1>
            <NavLink to ="/">Home</NavLink>
           <NavLink to="drinks">Drinks</NavLink>
      </nav>
     </header>
     
  <Routes>
  <Route index element={<Home/>}/>
  <Route path="drinks" element={<Drinks/>}/>
</Routes>


  </BrowserRouter>
   );
}

export default App;
