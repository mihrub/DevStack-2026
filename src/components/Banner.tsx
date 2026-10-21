import React from 'react';
import BannerIMG from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex justify-between mt-8 mb-10 items-center'>
            <div>
                <h2 className='pl-15 font-bold text-5xl pb-7'>Build Your Ideal <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h2>
                <p className='text-gray-500 pl-15'>Explore frontend, backend, database, and tooling options,<br />compare them side by side, and put together the stack that fits your <br />next project.</p>
                <div className='mt-8 pl-15 flex gap-5'>
                    <button className='btn border-none rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899] px-6 text-white'>Explore Technologies</button>
                    <button className="btn rounded-lg border border-gray-200 bg-white px-8 text-gray-600">Learn More</button>
                </div>
            </div>
            <div>
                <img src={BannerIMG} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;