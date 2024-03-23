import useProjects from "../../Hooks/useProjects";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
    const [projects, refetch] = useProjects();
    return (
        <div>
            <h1 className="text-center font-bold text-2xl my-5">Sample Project</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 p-5">
                {projects.map(item => <ProjectsCard key={item._id} refetch={refetch} item={item}></ProjectsCard>)}
            </div>
        </div>
    );
};

export default Projects;