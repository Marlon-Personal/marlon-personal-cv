import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const DropDown = ({ toggle, data }) => {
    if (!toggle) {
        return null;
    }
    return (
        <div className="w-full">
            {data.description}
        </div>
    )
}


const CardDropdown = ({ data, sectionTitle }) => {

    const arrayLength = data.length;


    const [stateValues, setStateValues] = useState(Array(arrayLength).fill(false));

    const handleClick = (index) => {
        setStateValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = !newValues[index];
            return newValues;
        });
    };

    return (
        <>
            <div className="px-8 mt-16 h-screen">
                <h2 className="text-3xl text-center">
                    {sectionTitle}
                </h2>

                <div className="">
                    {stateValues.map((value, index) => (
                        <div key={index}>
                            <button className={`bg-white ${value ? 'border-b-0' : 'border-b-2'} text-black text-lg py-4 flex items-center w-full`} onClick={() => handleClick(index)}>
                                <h4 className="mr-2">{data[index].title}</h4><RiArrowDropDownLine className="text-xl" />
                            </button>
                            <DropDown toggle={value} data={data[index]} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );


}

export default CardDropdown