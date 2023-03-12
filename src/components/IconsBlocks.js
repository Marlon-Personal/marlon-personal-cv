import { BsFillLightningFill } from "react-icons/bs"

const IconsBlocks = ({ data, sectionTitle }) => {
    return (
        <>
            <div className="h-auto md:h-screen flex flex-col justify-around mx-12">
                <div className="sectionTitleContainer text-4xl text-gray-800 text-center">
                    <h2 id="icon-blocks" className="sectionTitle">
                        {sectionTitle}
                    </h2>
                </div>
                <div className="cardsContainer grid md:grid-cols-3 md:gap-y-16 md:gap-x-8">
                    {data.map((item, index) => {
                        return <>
                            <div className="iconCardWrapper hover:scale-105 flex flex-col m-4 py-16 px-4 border border-b-sky-900 hover:border-b-gray-600 border-b-[3px] shadow-lg hover:shadow-xl relative" key={index}>
                                <div className="animate-fade-in iconHolder bg-sky-900 mx-8 py-8 absolute left-1/3 right-1/3 -top-12 hover:bg-gray-500">
                                    <BsFillLightningFill className="text-gray-200 text-2xl mx-auto"/>
                                </div>
                                <h3 className="animate-fade-in-slower iconCardTitle uppercase font-bold text-center text-xl text-gray-900 my-4">{item.title}</h3>
                                <p className="animate-fade-in-slower iconCardDescription mt-4 font-thin text-center text-md text-gray-800">{item.description}</p>
                            </div>
                        </>
                    }
                    )}
                </div>
            </div>
        </>
    );
}

export default IconsBlocks;