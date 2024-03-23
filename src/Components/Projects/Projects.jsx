import useProjects from "../../Hooks/useProjects";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
    const [projects] = useProjects();
    return (
        <div>
            <h1 className="text-center font-bold text-2xl my-5">Sample Project</h1>
            <div className="grid grid-cols-3 gap-6 p-5">
                {projects.map(item => <ProjectsCard key={item._id} item={item}></ProjectsCard>)}
            </div>
        </div>
    );
};

export default Projects;