import { Link } from 'react-router-dom';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'

const RegLink = () => <div>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 space-y-5 p-4'>
                <h3 className='text-violet-400 text-2xl font-bold'>Register now and unlock the full Site experience!</h3>
                <h1 className="text-3xl font-bold">Register now for your personalized dashboard implementation journey!</h1>

                <p>By registering data sources and user preferences upfront, we ensure a seamless integration process, paving the way for a more efficient and personalized dashboard experience.</p>
                <Link to='/register'><button className="buttonProject2 mt-5">Register Now</button></Link>
            </div>
            <div className='lg:w-1/2 relative'>
                <img src={img1} className="w-3/4 rounded-lg shadow-2xl border-8  border-white " />
                <img src={img2} className='w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl' alt="" />
            </div>
        </div>
    </div>
</div>

export default RegLink;