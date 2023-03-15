import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='fixed top-0 z-20 bg-white w-screen border-b border-gray-300'>
            <ul className='flex justify-end mr-4 bg-white'>
                <Link to="/"><li className='font-thin text-lg p-2 px-6 hover:bg-black hover:text-white'>
                    Home
                </li></Link>
                <Link to="/about"><li className='font-thin text-lg p-2 px-6 hover:bg-black hover:text-white'>
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