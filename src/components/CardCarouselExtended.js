import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CardCarousel = ({ data, sectionTitle, isReverse }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.description.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    const carouselInfiniteScrollBack = () => {
        if (currentIndex === 0) {
            return setCurrentIndex(data.description.length - 1);
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
            <div id="card-carousel" className="md:p-24 py-10 h-screen flex flex-col justify-center">
                <h2 className="animate-fade-in text-center text-4xl text-gray-800 hidden md:block">{data.title}</h2>
                <div class={`flex ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col-reverse justify-end md:justify-center md:items-center h-full`}>
                    <div class="p-12 w-full h-3/4 md:h-auto flex flex-col justify-start md:justify-around">
                        <h3 className="mb-5 text-lg font-light tracking-tight text-gray-500 text-center md:text-left">{data.dates}</h3>
                        <div className="md:animate-fade-in justify-between mb-6 md:hidden flex">
                            <a onClick={carouselInfiniteScrollBack} className="text-xl md:text-3xl text-gray-500 hover:text-gray-900"><BsArrowLeft /></a>
                            <a onClick={carouselInfiniteScroll} className="text-xl md:text-3xl text-gray-500 hover:text-gray-900"><BsArrowRight /></a>
                        </div>

                        <div className="flex flex-nowrap overflow-hidden">
                            {data.description.map((item, index) => {
                                return <>
                                    <div className="animate-fade-in flex justify-start flex-col w-100 min-w-full min-h-full ease-in duration-1000 " style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index}>
                                        <p className="mb-8 text-xl font-light text-gray-900 text-center md:text-left leading-10">{item}</p>
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

                    <div style={{ backgroundImage: `url(${data.image})` }} className="bg-center bg-cover md:animate-fade-in h-1/4 md:h-3/4 w-full flex items-center justify-center md:mt-0">
                        <h2 className="animate-fade-in text-center text-4xl text-white block bg-gray-900/50 w-full py-4 md:hidden">{data.title}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCarousel