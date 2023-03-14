import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='fixed top-0 z-20 bg-white w-screen border-b border-gray-300'>
            <ul className='flex justify-end mr-2 bg-white'>
                <li className='font-thin text-lg p-2 px-4 hover:bg-black hover:text-white'>
                    <Link to="/">Home</Link>
                </li>
                <li  className='font-thin text-lg p-2 px-4 hover:bg-black hover:text-white'>
                    <Link to="/about">Jobs</Link>
                </li>
                <li  className='font-thin text-lg p-2 px-4 hover:bg-black hover:text-white'>
                    <Link to="/articles">Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;