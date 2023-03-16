import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { useEffect, useState } from 'react';    
const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let heightToShowFrom = 250;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        setHeight(winScroll);

        console.log('up' + winScroll);
        console.log('height' + heightToShowFrom);
        if (winScroll < heightToShowFrom) {
            setIsVisible(false);
            console.log('scroll is less');
        } else {
            setIsVisible(true);
        }
    };
    return (

        <div>
            {
                isVisible
                &&
                <div id="hide" className="">
                    <footer className='fixed bottom-0 z-20 bg-black w-screen'>
                        <ul className='flex justify-center py-1'>
                           <a target="_blank" href='https://github.com/Marlon-Personal'><li className='font-thin text-3xl p-2 px-6 text-white hover:text-sky-500'>
                                <AiFillGithub />
                            </li></a>
                            <a target="_blank" href='https://www.linkedin.com/in/marlon-aguero-vargas/'><li className='font-thin text-3xl p-2 px-6 text-white hover:text-sky-500'>
                                <AiFillLinkedin />
                            </li></a>
                            <a href='mailto:marlon.aguero.vargas@gmail.com'><li className='font-thin text-3xl p-2 px-6 text-white hover:text-sky-500'>
                                <AiOutlineMail />
                            </li></a>
                        </ul>
                    </footer>
                </div>
            }
        </div>
    );
}

export default Footer;