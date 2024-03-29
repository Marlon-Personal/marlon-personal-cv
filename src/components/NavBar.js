import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='fixed top-0 z-20 bg-white w-screen border-b border-gray-300 flex justify-center md:justify-between px-4  md:px-8'>
            <span className='font-light hidden md:block md:text-3xl uppercase md:pt-1'>Marlon Agüero</span>
            <ul className='flex'>
                <Link to="/"><li className='font-thin text-lg p-2 px-6 hover:bg-black hover:text-white'>
                    Home
                </li></Link>
                <Link to="/jobs"><li className='font-thin text-lg p-2 px-6 hover:bg-black hover:text-white'>
                    Jobs
                </li></Link>
                <Link to="/articles"><li className='font-thin text-lg p-2 px-6 hover:bg-black hover:text-white'>
                    Blog
                </li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;