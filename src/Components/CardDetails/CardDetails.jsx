import { useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const cardDetails = useLoaderData();
    const { author, width, height, url, download_url, title, details } = cardDetails;
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


        </div>
    );
};

export default CardDetails;