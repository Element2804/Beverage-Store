import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
//header
import NavTabs from './components/NavTabs/NavTabs';
//pages
import Home from './pages/Home';
import Drinks from './pages/Drinks';

const router = createBrowserRouter(
  createRoutesFromElements(

<Route path="/" element={<NavTabs/>} >
  <Route index element={<Home/>}/>
  <Route path="drinks" element={<Drinks/>}/>

  </Route>
  )
)

function App() {
 return (  
     
   
   <RouterProvider router={router}/>
  
   );
}

export default App;
