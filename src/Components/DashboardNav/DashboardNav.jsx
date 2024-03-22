import { FaUser } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";


const DashboardNav = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal">
                        <div>
                            <p className="text-[14px] text-[#000000] font-bold font-sans">Free Trial | <span className="text-[10px]">2days left</span></p>
                            <p className="text-[10px] text-[#FA782F] font-sans">Extend free trail</p>
                        </div>
                        <li>
                            <details>
                                <summary>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full ring-offset-base-100 ring-offset-2">
                                            {
                                                user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                            }
                                        </div>
                                    </div>
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;