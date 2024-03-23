import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProject = () => {
    const updateProject = useLoaderData();
    const { _id, author, width, height, url, download_url, title, details } = updateProject;


    const handleUpdateInformation = (e) => {
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
        fetch(`http://localhost:5000/projects/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(projectInformation)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Project information Updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div>
                            <h1 className="font-bold text-xl">You Are Updating : {author}</h1>
                            <form onSubmit={handleUpdateInformation} method="dialog" className="card-body">
                                <div className="flex gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Author Name</span>
                                        </label>
                                        <input type="text" defaultValue={author} name="author" placeholder="Author Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Title</span>
                                        </label>
                                        <input type="text" defaultValue={title} name="title" placeholder="Title" className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="flex gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Height</span>
                                        </label>
                                        <input type="number" defaultValue={height} name="height" placeholder="Height" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Width</span>
                                        </label>
                                        <input type="number" defaultValue={width} name="width" placeholder="Width" className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="flex gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">URL</span>
                                        </label>
                                        <input type="text" defaultValue={url} name="url" placeholder="URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Download URL</span>
                                        </label>
                                        <input type="text" defaultValue={download_url} name="download_url" placeholder="Download URL" className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Details</span>
                                    </label>
                                    <input type="text" defaultValue={details} name="details" placeholder="Details" className="input input-bordered" required />
                                </div>


                                <div className="form-control mt-3">
                                    <button className="px-4 py-2 bg-red-800 rounded-2xl btn-outline text-white font-bold">Submit</button>
                                    <p className="text-center my-1">Press ESC key to exit</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProject;