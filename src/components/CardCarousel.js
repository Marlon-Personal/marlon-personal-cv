import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight, BsFillArrowDownCircleFill } from "react-icons/bs";

const CardCarousel = ({ data, sectionTitle, arrowLink }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    const carouselInfiniteScrollBack = () => {
        if (currentIndex === 0) {
            return setCurrentIndex(data.length - 1);
        }
        return setCurrentIndex(currentIndex - 1);
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 10000);
        //Cleans up the function
        return () => clearInterval(interval)
    });

    return (
        <>
            <div id="card-carousel" className="md:p-24 pb-16 h-screen flex flex-col justify-center">
                <h2 className="animate-fade-in text-center text-4xl text-gray-800 hidden md:block">{sectionTitle}</h2>
                <div class="flex md:flex-row flex-col-reverse justify-end md:justify-center md:items-center h-full">
                    <div class="p-12 w-full h-auto flex flex-col justify-start md:justify-around">
                        <div className="md:animate-fade-in justify-between mb-6 md:hidden flex">
                            <a onClick={carouselInfiniteScrollBack} className="text-xl md:text-3xl text-gray-500 hover:text-gray-900"><BsArrowLeft /></a>
                            <a onClick={carouselInfiniteScroll} className="text-xl md:text-3xl text-gray-500 hover:text-gray-900"><BsArrowRight /></a>
                        </div>
                        <div className="flex flex-nowrap overflow-hidden">
                            {data.map((item, index) => {
                                return <>
                                    <div className="animate-fade-in flex justify-start flex-col w-100 min-w-full min-h-full ease-in duration-1000 " style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index}>
                                        <h3 className="mb-5 text-3xl tracking-tight text-gray-900 text-center md:text-left">{item.title}</h3>
                                        <p className="mb-8 text-xl font-thin text-gray-900 text-center md:text-left">{item.description}</p>
                                    </div>
                                </>
                            }
                            )}
                        </div>
                        <div className="animate-fade-in flex md:w-1/4 justify-between hidden md:flex">
                            <a onClick={carouselInfiniteScrollBack} className="text-xl md:text-3xl text-gray-500 hover:text-gray-900"><BsArrowLeft /></a>
                            <a onClick={carouselInfiniteScroll} className="text-xl md:text-3xl text-gray-500 hover:text-gray-900"><BsArrowRight /></a>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${data[0].image})` }} className="bg-center bg-cover md:animate-fade-in h-2/3 md:h-3/4 w-full flex items-center justify-center md:mt-0">
                        <h2 className="animate-fade-in text-center text-5xl text-white block bg-gray-900/50 w-full py-4 md:hidden">{sectionTitle}</h2>
                    </div>
                </div>
                <div className="animate-fade-in flex items-center justify-center relative">
                    <a className="text-6xl absolute -top-38 md:-top-10 hover:text-7xl" href={arrowLink}><BsFillArrowDownCircleFill className="hover:text-sky-900" /></a>
                </div>
            </div>
        </>
    )
}

export default CardCarousel