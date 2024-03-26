import { NavLink } from "react-router-dom";


const Navbar = () => {


    return (
        <div className="py-8">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" dropdown-content font-lg  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                            <li ><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#23BE0A] font-semibold font-lg" : ""} >Home</NavLink></li>
                            <li ><NavLink to={'/listedbooks'} className={({ isActive }) => isActive ? "text-[#23BE0A] font-semibold font-lg" : ""} >Listed Books</NavLink></li>
                            <li ><NavLink to={'/pagestoread'} className={({ isActive }) => isActive ? "text-[#23BE0A] font-semibold font-lg" : ""} >Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[28px] font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" px-2 flex flex-row item-center  justify-center gap-4 font-lg">
                        <li ><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#23BE0A] font-semibold font-lg border-2 px-2 py-1 rounded-lg" : ""} >Home</NavLink></li>
                        <li ><NavLink to={'/listedbooks'} className={({ isActive }) => isActive ? "text-[#23BE0A] font-semibold font-lg border-2 px-2 py-1 rounded-lg" : ""} >Listed Books</NavLink></li>
                        <li ><NavLink to={'/pagestoread'} className={({ isActive }) => isActive ? "text-[#23BE0A] font-semibold font-lg border-2 px-2 py-1 rounded-lg" : ""} >Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn  text-white font-semibold text-lg bg-[#23BE0A]">sign in</a>
                    <a className="btn  text-white font-semibold text-lg bg-[#59C6D2]">sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;