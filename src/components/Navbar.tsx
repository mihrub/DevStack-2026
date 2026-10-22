import Logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <div className='sticky flex justify-around items-center py-4 top-0 z-50 bg-white'>
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <div>
                <ul className='flex justify-between gap-5 items-center'>
                    <li className='text-pink-600'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex justify-between gap-4 items-center'>
                <button className='btn btn-ghost'>Sign In</button>
                <button className="btn rounded-full border-none bg-[#DB2777] text-white hover:opacity-90 cursor-pointer">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;