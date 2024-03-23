import { FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useProjects from "../../Hooks/useProjects";
import { Link } from "react-router-dom";


const ProjectsCard = ({ item }) => {
    const { _id, author, width, height, download_url } = item;
    const axiosPublic = useAxiosPublic();
    const [, , refetch] = useProjects();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/projects/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Project file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .then(err => {
                        console.log(err);
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={download_url} alt="URL" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Author :{author}</h2>
                    <p>Wigth : {width}</p>
                    <p>Height : {height}</p>
                    <div className="card-actions justify-center my-8">
                        <Link to={`/cardDetails/${_id}`}><button className="buttonProject2">Details</button></Link>
                        <button className="buttonProject2">Update</button>
                        <button onClick={() => handleDelete(item._id)} className="buttonProject2 flex items-center gap-2">Detete<FaTrash className="text-base text-red-400"></FaTrash></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;