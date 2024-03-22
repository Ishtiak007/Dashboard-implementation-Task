import { BiSolidFilePlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const MyProject = () => {
    return (
        <div className="p-10">
            <h1 className="text-[30px] font-bold">My Project</h1>
            <div>
                <Link to='/' className="card card-compact lg:w-96 bg-base-100 p-10 my-10">
                    <figure className="bg-[#FA782F66] p-10 rounded-md">
                        <BiSolidFilePlus className="text-6xl text-white"></BiSolidFilePlus>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-[16px]">Create a new project</h2>
                        <p className="text-center font-bold">or try a <span className="text-[#FA782F]"> sample project</span></p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MyProject;