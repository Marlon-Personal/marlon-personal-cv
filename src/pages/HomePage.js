import React from 'react';
import CardCarousel from '../components/CardCarousel';
import CardDropdown from '../components/CardDropdown';
import Footer from '../components/Footer';
import HeroComponent from '../components/HeroComponent';
import IconsBlocks from '../components/IconsBlocks';
import NavBar from '../components/NavBar';
import jobs from '../data/jobs'
import skills from '../data/skills'

function Home() {

    console.log(jobs);
    const aboutMeData = [
        { title: "About me", description: "My name is Marlon, I am a Software Developer working in Frontend for over 3 years. I live in Costa Rica working remotely for an e-commerce company based in UK.", image: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
        { title: "My hobbies", description: "My hobbies are soccer, nature and macro photography, building legos and solving puzzlez, video games and taking care of my plants!", image: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
        { title: "My family", description: "I live with my beautiful wife and my 3 cats Millies, who is the older, wiser and lazier. George Michael, the alpha male (according to him), and Beanie, a cute little ball of fur. We live outside of the capital in a small town", image: "https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }
    ]

    return (
        <>
            <NavBar />
            <HeroComponent title="Hello world! I am Marlon" paragragh="Lorem ipsum dolor amet sit" button="Check more about me!" button_url="#card-carousel" backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
            <CardCarousel data={aboutMeData} sectionTitle="About Me" arrowLink="#icon-blocks" />
            <IconsBlocks data={skills} sectionTitle="Skills I've picked up along the way" />
            <CardDropdown mainImage={"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"} data={jobs.compresedData} sectionTitle="My past jobs" />
            <Footer />
        </>
    );
}

export default Home;