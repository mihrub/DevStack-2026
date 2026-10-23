import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div className='mt-20'>

        <div className="divider"></div>

        <section className='flex justify-between gap-4 pl-15 pr-15'>
        <div>
            <img src= {Logo} alt="Logo" className='mb-3'/>
            <p className='text-gray-500 mb-4'>Curated tools, technologies, and resources for developers building <br /> modern software.</p>
            <ul className='flex gap-7 items-center justify-baseline'>
                <li className='cursor-pointer hover:text-pink-400'>Github</li>
                <li className='cursor-pointer hover:text-pink-400'>Twitter</li>
                <li className='cursor-pointer hover:text-pink-400'>Linkedin</li>
            </ul>
        </div>

        <div>
            <h3 className='font-semibold mb-2'>Product</h3>
            <ul className='grid gap-1'>
                <li className='cursor-pointer hover:text-pink-400'>Home</li>
                <li className='cursor-pointer hover:text-pink-400'>Technologies</li>
                <li className='cursor-pointer hover:text-pink-400'>Projects</li>
            </ul>
        </div>

        <div>
            <h3 className='font-semibold mb-2'>Company</h3>
            <ul className='grid gap-1'>
                <li className='cursor-pointer hover:text-pink-400'>About</li>
                <li className='cursor-pointer hover:text-pink-400'>Contact</li>
                <li className='cursor-pointer hover:text-pink-400'>Careers</li>
            </ul>
        </div>

        <div>
            <h3 className='font-semibold mb-2'>Legal</h3>
            <ul className='grid gap-1'>
                <li className='cursor-pointer hover:text-pink-400'>Privacy Policy</li>
                <li className='cursor-pointer hover:text-pink-400'>Terms of Service</li>
            </ul>
        </div>
        </section>
        <section className='flex justify-between border-t border-gray-200 pt-5 mt-7 mb-5 pl-15 pr-15 text-sm text-gray-400'>
            <div>
                <p>© 2026 Dev Stack. All rights reserved.</p>
            </div>
            <div className='flex gap-3'>
                <span>Privacy</span>
                <span>Terms</span>
            </div>
        </section>
        </div>
    );
};

export default Footer;