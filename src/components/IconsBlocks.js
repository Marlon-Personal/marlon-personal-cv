import { BsFillLightningFill, BsArrowLeft, BsArrowRight, BsFillArrowDownCircleFill } from "react-icons/bs"
import { useState, useEffect } from "react"
const IconsBlocks = ({ data, sectionTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 2) {
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
            <div id="icon-blocks">
                <div className="h-auto md:h-screen hidden md:flex flex-col items-center justify-around mx-4 md:mx-28">
                    <div className="sectionTitleContainer text-4xl text-gray-800 text-center">
                        <h2 className="sectionTitle pt-8 mx-6 md:mx-0 md:mt-16 md:mb-16 md:pt-0">
                            {sectionTitle}
                        </h2>
                    </div>
                    <div className="cardsContainer mt-14 md:mt-0 grid w-screen gap-y-14 md:gap-x-8">
                        <div className="flex flex-nowrap px-8">
                            {data.map((item, index) => {
                                return <>
                                    <div className="iconCardWrapper hover:scale-105 w-96 mx-2 md:mx-8 md:my-2 my-4 md:m-4 py-8 px-4 border border-b-sky-900 hover:border-b-gray-600 border-b-[3px] shadow-lg hover:shadow-xl relative ease-in duration-1000" style={{ transform: `translate(-${currentIndex * 60}%)` }} key={index}>
                                        <div className="animate-fade-in iconHolder bg-sky-900 mx-6 md:mx-4 py-6 md:py-8 absolute left-1/3 right-1/3 -top-8 md:-top-12 hover:bg-gray-500">
                                            <BsFillLightningFill className="text-gray-200 text-2xl mx-auto" />
                                        </div>
                                        <h3 className="animate-fade-in-slower iconCardTitle uppercase font-bold text-center text-xl text-gray-900 my-4">{item.title}</h3>
                                        <p className="animate-fade-in-slower iconCardDescription mt-4 font-thin text-center text-md text-gray-800">{item.description}</p>
                                    </div>
                                </>
                            }
                            )}
                        </div>
                    </div>

                    <div className="animate-fade-in flex w-full justify-between">
                        <a onClick={carouselInfiniteScrollBack} className="text-xl md:text-3xl text-gray-500 hover:text-gray-900"><BsArrowLeft /></a>
                        <a onClick={carouselInfiniteScroll} className="text-xl md:text-3xl text-gray-500 hover:text-gray-900"><BsArrowRight /></a>
                    </div>

                    <a href="#drodpdown-card-myPastJobs" className="text-6xl flex items-center justify-center"><BsFillArrowDownCircleFill className="hover:text-7xl hover:text-sky-800" /></a>


                </div>

                <div className="h-auto md:h-screen flex md:hidden flex-col justify-around mx-4 md:mx-28">
                    <div className="sectionTitleContainer text-4xl text-gray-800 text-center">
                        <h2 className="sectionTitle pt-8 mx-6 md:mx-0 md:mt-16 md:mb-16 md:pt-0">
                            {sectionTitle}
                        </h2>
                    </div>
                    <div className="cardsContainer mt-14 md:mt-0 grid md:grid-cols-3 gap-y-14 md:gap-y-16 md:gap-x-8">
                        {data.map((item, index) => {
                            return <>
                                <div className="iconCardWrapper hover:scale-105 flex flex-col mx-2 md:mx-8 md:my-2 my-4 md:m-4 py-8 md:py-16 px-4 border border-b-sky-900 hover:border-b-gray-600 border-b-[3px] shadow-lg hover:shadow-xl relative" key={index}>
                                    <div className="animate-fade-in iconHolder bg-sky-900 mx-6 md:mx-4 py-6 md:py-8 absolute left-1/3 right-1/3 -top-8 md:-top-12 hover:bg-gray-500">
                                        <BsFillLightningFill className="text-gray-200 text-2xl mx-auto" />
                                    </div>
                                    <h3 className="animate-fade-in-slower iconCardTitle uppercase font-bold text-center text-xl text-gray-900 my-4">{item.title}</h3>
                                    <p className="animate-fade-in-slower iconCardDescription mt-4 font-thin text-center text-md text-gray-800">{item.description}</p>
                                </div>
                            </>
                        }
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default IconsBlocks;