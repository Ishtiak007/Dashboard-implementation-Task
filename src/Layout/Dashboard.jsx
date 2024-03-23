import { Link, NavLink, Outlet } from "react-router-dom";
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
        <div className="lg:flex p-2">
            {/* bashboard sidebar */}
            <div className="w-56 min-h-screen mx-auto bg-[#FFFFFF] rounded-md">
                <ul className="menu">
                    {
                        <div>
                            <Link to='/' className="text-center"><><img className="w-32" src={logo} alt="" /></></Link>
                            <div className="divider"></div>
                            <li>
                                <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/dashboard/myProject'><FaDatabase></FaDatabase>My Project</NavLink>
                            </li>
                            <li>
                                <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/dashboard/projectsCard'><RiAppsFill></RiAppsFill>Sample Projects</NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=en&gl=US'><TbApps></TbApps>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/dashboard/bookings'><FaPlayCircle></FaPlayCircle> Intro to Necleo</NavLink>
                            </li>
                        </div>
                    }



                    <div className="lg:mt-80">
                        <li>
                            <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='https://www.seequenze.com/'><BsFillQuestionCircleFill></BsFillQuestionCircleFill>Help & Support</NavLink>
                        </li>
                        <li>
                            <NavLink className={`text-[#C4C4C4] text-base active:text-orange-400`} to='/dashboard/feedback'><MdFeedback></MdFeedback>Feedback</NavLink>
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