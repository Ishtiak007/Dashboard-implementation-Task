

const ProjectsCard = ({ item }) => {
    const { author, width, height, download_url } = item;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={download_url} alt="URL" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Author :{author}</h2>
                    <p>Wigth : {width}</p>
                    <p>Height : {height}</p>
                    <div className="card-actions justify-end">
                        <button className="buttonProject2">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;