import { NavLink, Outlet } from "react-router-dom";

const NavTabs = () => {
    return ( 
      <section className="nav-tabs">
      <header>
         <nav>
           <h1>GulpCo</h1>
           <NavLink to ="/">Home</NavLink>
           <NavLink to="drinks">Drinks</NavLink>
           </nav>
       </header>
      <main>
        <Outlet/>
      </main>
      </section>
     );
  }
   
  export default NavTabs ;