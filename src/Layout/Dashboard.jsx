import { NavLink, Outlet } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { RiAppsFill } from "react-icons/ri";
import { TbApps } from "react-icons/tb";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import DashboardNav from "../Components/DashboardNav/DashboardNav";
import logo from '../assets/logo.jpg'


const Dashboard = () => {
    return (
        <div className="flex p-2">
            {/* bashboard sidebar */}
            <div className="w-56 min-h-screen bg-[#FFFFFF] rounded-md">
                <ul className="menu">
                    {
                        <div>
                            <li className="text-center"><><img className="w-40" src={logo} alt="" /></></li>
                            <div className="divider"></div>
                            <li>
                                <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/dashboard/myProject'><FaDatabase></FaDatabase>My Project</NavLink>
                            </li>
                            <li>
                                <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/dashboard/addItems'><RiAppsFill></RiAppsFill>Sample Projects</NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/dashboard/manageItems'><TbApps></TbApps>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/dashboard/bookings'><FaPlayCircle></FaPlayCircle> Intro to Necleo</NavLink>
                            </li>
                        </div>
                    }



                    <div className="lg:mt-80">
                        <li>
                            <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/'><BsFillQuestionCircleFill></BsFillQuestionCircleFill>Help & Support</NavLink>
                        </li>
                        <li>
                            <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/order/salad'><MdFeedback></MdFeedback>Feedback</NavLink>
                        </li>
                        <li>
                            <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/menu'><TbLayoutSidebarLeftCollapse></TbLayoutSidebarLeftCollapse>Collapse</NavLink>
                        </li>
                    </div>
                </ul>
            </div>
            {/* dahsboard content */}
            <div className="flex-1 bg-slate-50">

                <DashboardNav></DashboardNav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;