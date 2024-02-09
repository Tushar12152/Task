import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       


      </ul>
    </div>
      <h1 className="font-bold text-xl text-blue-400">TechnoFix</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-6 justify-center">
     
   <NavLink  to={`/}`}  className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending"  : "hover:text-blue-500 text-md"  } >  Home  </NavLink>

   <NavLink  to={`/users-list}`}  className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending"  : "hover:text-blue-500 text-md"  } >  Users List  </NavLink>

    </ul>
  </div>
  <div className="navbar-end">
    <button className="bg-blue-400 px-4 py-2 text-white rounded-md hover:bg-yellow-300 ">Lets Explore</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;