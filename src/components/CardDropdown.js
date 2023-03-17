import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs"
import { useState, useEffect } from "react";

const DropDown = ({ toggle, data, firstImage }) => {

    useEffect(() => {
        const img = document.getElementById('dropdownCardImage');
        if (toggle) {
            img.src = data.image;
        } else {
            img.src = firstImage;
        }
    }, [toggle]);

    if (!toggle) {
        return null;
    }
    return (
        <div className="w-full border-b-2 border-sky-900">
            <p className="font-thin pb-4" dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
    )
}

const CardDropdown = ({ mainImage, data, sectionTitle, button, button_url }) => {
    const arrayLength = data.length;

    const [stateValues, setStateValues] = useState(Array(arrayLength).fill(false));

    const handleClick = (index) => {
        setStateValues((prevValues) => {
            const newValues = [...prevValues];

            newValues.forEach((element, i) => {
                if (i == index) {
                    newValues[i] = !newValues[index];
                } else {
                    newValues[i] = false;
                }
                i++;
            });

            return newValues;
        });
    };

    return (
        <>
            <div id={`drodpdown-card-${sectionTitle.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
                if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
                return index === 0 ? match.toLowerCase() : match.toUpperCase();
            })}`} className=" px-8 pt-8 mt-16 md:mt-38 h-screen relative">
                <h2 className="text-4xl mt-8 md:mt-12 text-gray-800 text-center">
                    {sectionTitle}
                </h2>
                <div className="flex flex-col justify-between shadow-lg bg-white border p-4 md:p-12 mt-4 md:mt-12 h-3/5 md:h-2/3 absolute z-10 left-8 right-8 md:left-16 md:right-1/3">
                  <div>
                    {stateValues.map((value, index) => (
                        <>
                            <div key={index}>
                                <button className={`bg-white ${value ? 'border-b-0' : 'border-b-2'} border-sky-900 text-black font-semibold text-lg py-4 flex items-center justify-between w-full`} onClick={() => handleClick(index)}>
                                    <h4 className="hover:text-sky-700 text-xl md:text-2xl font-normal tracking-tight text-gray-900">{data[index].title}</h4>{value ? <RiArrowDropUpLine className="text-xl font-semibold" /> : <RiArrowDropDownLine className="text-xl font-semibold" />}
                                </button>
                                <DropDown toggle={value} data={data[index]} firstImage={mainImage} />
                            </div>
                        </>
                    ))}
                    </div>
                    <div className="animate-fade-in">
                        <a href={button_url} className="p-4 bg-black text-xl text-white flex md:w-1/3 justify-around items-center hover:bg-sky-900">
                            <span>{button}</span><BsArrowRightShort className="text-white"/>
                        </a>
                    </div>
                </div>
                <div className="shadow-lg h-1/3 md:h-2/3 flex items-center justify-center md:mt-0 absolute bottom-0 z-0 md:left-1/2 md:bottom-16 md:right-6 left-0 right-0">
                    <img id="dropdownCardImage" src={data[0].image} className="h-full" />
                </div>
            </div>
        </>
    );
}

export default CardDropdown;