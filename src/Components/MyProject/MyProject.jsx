import { BiSolidFilePlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MyProject = () => {
    const axiosPublic = useAxiosPublic();
    const handleAddInformation = (e) => {
        e.preventDefault();
        const form = e.target;
        const author = form.author.value;
        const width = form.width.value;
        const height = form.height.value;
        const url = form.url.value;
        const download_url = form.download_url.value;
        const title = form.title.value;
        const details = form.details.value;

        const projectInformation = {
            author, width, height, url, download_url, title, details
        }
        axiosPublic.post('/projects', projectInformation)
            .then(res => {

                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-right",
                        icon: "success",
                        title: `${author} added to project sample`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (
        <div className="p-10">
            <h1 className="text-[30px] font-bold">My Project</h1>
            <div>
                <Link onClick={() => document.getElementById('my_modal_1').showModal()} className="card card-compact lg:w-96 bg-base-100 p-10 my-10">
                    <figure className="bg-[#FA782F66] p-10 rounded-md">
                        <BiSolidFilePlus className="text-6xl text-white"></BiSolidFilePlus>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-[16px]">Create a new project</h2>
                        <p className="text-center font-bold">or try a <span className="text-[#FA782F]"> sample project</span></p>
                    </div>
                </Link>

                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h1 className="py-2 text-center font-bold text-xl">Add your Project</h1>
                        <div>
                            <div>
                                <form onSubmit={handleAddInformation} method="dialog" className="card-body">
                                    <div className="flex gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Author Name</span>
                                            </label>
                                            <input type="text" name="author" placeholder="Author Name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Title</span>
                                            </label>
                                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                                        </div>
                                    </div>


                                    <div className="flex gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Height</span>
                                            </label>
                                            <input type="number" name="height" placeholder="Height" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Width</span>
                                            </label>
                                            <input type="number" name="width" placeholder="Width" className="input input-bordered" required />
                                        </div>
                                    </div>


                                    <div className="flex gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">URL</span>
                                            </label>
                                            <input type="text" name="url" placeholder="URL" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Download URL</span>
                                            </label>
                                            <input type="text" name="download_url" placeholder="Download URL" className="input input-bordered" required />
                                        </div>
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Details</span>
                                        </label>
                                        <input type="text" name="details" placeholder="Details" className="input input-bordered" required />
                                    </div>


                                    <div className="form-control mt-3">
                                        <button className="px-4 py-2 bg-red-800 rounded-2xl btn-outline text-white font-bold">Submit</button>
                                        <p className="text-center my-1">Press ESC key to exit</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyProject;