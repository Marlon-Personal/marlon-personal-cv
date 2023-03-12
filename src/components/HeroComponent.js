import React from "react";


export default function HeroComponent({ title, paragragh, button, button_url, backgroundImage }) {
    return (
        <div
            className="bg-cover bg-no-repeat h-screen w-full bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="h-full w-full flex items-center justify-center ">
            <div className="flex flex-col items-center justify-evenly h-1/2">
                <h1 className="animate-fade-in text-3xl md:text-5xl text-center tracking-wider text-white uppercase">
                    { title }
                </h1>
                <div className="animate-fade-in">
                    <a href={button_url} className="px-6 py-3 border text-center text-xl text-white hover:text-sky-700 hover:border-sky-700">
                        { button }
                    </a>
                </div>
            </div>
            </div>
        </div>

    );
}
