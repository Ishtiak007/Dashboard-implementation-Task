import { useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const cardDetails = useLoaderData();
    const { author, width, height, download_url, title, details } = cardDetails;
    return (
        <div>
            <div style={{ '--image-url': `url(${download_url})` }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[500px] bg-cover'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <h1 className="text-2xl uppercase font-bold text-white">Details of : {author}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex my-7 gap-4">

                <div className="flex-1">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold">Title : {title}</h1>
                            <h2 className="card-title font-bold">Author Name : {author}</h2>
                            <p className="text-gray-500">{details}</p>
                            <p className="font-bold">Height: {height}</p>
                            <p className="font-bold">Width: {width}</p>

                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={download_url} className="w-full rounded-md border-8 border-gray-200" alt="" />
                </div>
            </div>

        </div>
    );
};

export default CardDetails;