import React from 'react';
import CardCarousel from '../components/CardCarousel';
import HeroComponent from '../components/HeroComponent';
import IconsBlocks from '../components/IconsBlocks';

function Home() {
        const aboutMeData = [
        {title: "About me 1", description: "My name is Marlon, I am a Software Developer working as Frontend Engineer for over 3 years. I live in Costa Rica working remotely for an e-commerce company.", image:"https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}, 
        {title: "My hobbies 2", description: "I like soccer, nature photography, building legos and solving puzzlez, video games and taking care of my plants!", image:"https://images.unsplash.com/photo-1611329857570-f02f340e7378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},
        {title: "My family 3", description: "I have 3 cats. Millies, who is the older, wiser and lazier. George Michael, who is the alpha male (according to him), and Beanie, a cute little ball of fur. I am also married to my beatiful wife.", image:"https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
    ]

    const softSkillsData = [
        {title: "Fast learner", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet. Donec ex tortor, venenatis ac volutpat et, pellentesque ac risus"},
        {title: "Great communicator", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet."},
        {title: "Problem solver", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet. Donec ex tortor."},
        {title: "Project management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet.", icon:"AiOutlineProject"}

    ]

    return (
        <>
            <HeroComponent title="Hello world! I am Marlon" paragragh="Lorem ipsum dolor amet sit" button="Click here" button_url="#card-carousel" backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
            <CardCarousel data={aboutMeData} sectionTitle="About Me" arrowLink="#icon-blocks"/>
            <IconsBlocks data={softSkillsData} sectionTitle="Skills I've picked up along the way"/>
        </>
    );
}

export default Home;