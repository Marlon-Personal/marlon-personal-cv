import React from 'react';
import CardCarousel from '../components/CardCarousel';
import CardDropdown from '../components/CardDropdown';
import Footer from '../components/Footer';
import HeroComponent from '../components/HeroComponent';
import IconsBlocks from '../components/IconsBlocks';
import NavBar from '../components/NavBar';
import jobs from '../data/jobs'
import techSkills from '../data/tech-skills'
import aboutMeData from '../data/about';
import {useEffect} from 'react';

function Home() {

    useEffect(() => {
        window.scrollTo(0,0)
      },[])

    return (
        <>
            <NavBar />
            <HeroComponent title="Hello world! I am Marlon" button="Check more about me!" button_url="#card-carousel" backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
            <CardCarousel data={aboutMeData} sectionTitle="About Me" arrowLink="#icon-blocks" />
            <IconsBlocks data={techSkills} sectionTitle="Skills I've picked up along the way" />
            <CardDropdown mainImage={"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"} data={jobs.compresedData} sectionTitle="My past jobs" button="See more about my jobs" button_url="/jobs"/>
            <Footer />
        </>
    );
}

export default Home;