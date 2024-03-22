import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-white' to='/faq'>FA questions</Link></li>
        <li><Link className='font-semibold text-white' to='/login'>Login</Link></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-slate-700 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost lg:text-xl"><span className="text-red-500">N</span><span className="text-white">ecleo</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-left z-10">
                        <label tabIndex={0} className="m-5">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    {
                                        user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                    }
                                </div>
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-red-400 rounded-box w-52">
                            <div>
                                <div className='my-5 text-xs text-white'>User Email : <br />{user ? <>{user.email}</> : <span className='text-black font-bold'>You are not Logged in</span>}</div>

                                <li><Link to='/dashboard' className='font-semibold text-gray-200 my-2 mx-auto'><button className='px-3 py-1 rounded-md bg-blue-500 hover:bg-orange-600  w-full'>Dashboard</button></Link></li>

                                <li><Link className='font-semibold text-gray-200 mx-auto' ><button onClick={handleLogOut} className='px-3 py-1 rounded-md bg-blue-500 hover:bg-orange-600 w-full'>Log Out</button></Link></li>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;