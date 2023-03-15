import React from 'react';
import CardCarousel from '../components/CardCarousel';
import CardDropdown from '../components/CardDropdown';
import HeroComponent from '../components/HeroComponent';
import IconsBlocks from '../components/IconsBlocks';
import NavBar from '../components/NavBar';

function Home() {
    const aboutMeData = [
        { title: "About me 1", description: "My name is Marlon, I am a Software Developer working as Frontend Engineer for over 3 years. I live in Costa Rica working remotely for an e-commerce company.", image: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
        { title: "My hobbies 2", description: "I like soccer, nature photography, building legos and solving puzzlez, video games and taking care of my plants!", image: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
        { title: "My family 3", description: "I have 3 cats. Millies, who is the older, wiser and lazier. George Michael, who is the alpha male (according to him), and Beanie, a cute little ball of fur. I am also married to my beatiful wife.", image: "https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }
    ]

    const JobsData = [
        { title: "Tek Experts", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet. Donec ex tortor, venenatis ac volutpat et, pellentesque ac risus", image: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
        { title: "Western Union", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet. Donec ex tortor, venenatis ac volutpat et, pellentesque ac risus. ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet. Donec ex tortor, venenatis ac volutpat et, pellentesque ac risus", image: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
        { title: "Leaf Grow", description: `<ul class="list-disc">
        <li class="ml-4 mb-4">Create and manage webpages based on client's requirements mostly using Shopify as the platform to create this websites, working with HTML, CSS, JS and Liquid; but also working the code from scratch when a client required so.</li>
        <li class="ml-4 mb-4">Create documentation of existing and new websites for the clients to have records of the development of their sites, as well as keep record of all changes-enhancements-bug fixes completed for each website.</li>
        <li class="ml-4 mb-4">Conduct and assist to meetings with the clients to understand the requirements for new pages or enhancements on existing pages. Noting down all requirements and answering all technical questions during each meeting.</li>
        <li class="ml-4 mb-4">Point of contact for technical questions and/or limitations in the websites for both the clients and our project managers. Reviewing/approving merge request from peers through GitHub, delivering code's feedback and best practices to improve the quality of the code delivered to the client.</li>
      </ul>`, image: "https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }
    ]


    const softSkillsData = [
        { title: "Fast learner", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet. Donec ex tortor, venenatis ac volutpat et, pellentesque ac risus" },
        { title: "Great communicator", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet." },
        { title: "Problem solver", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet. Donec ex tortor." },
        { title: "Project management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet.", icon: "AiOutlineProject" },
        { title: "Great communicator", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet." },
        { title: "Problem solver", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet. Donec ex tortor." },
        { title: "Project management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie massa rutrum auctor imperdiet.", icon: "AiOutlineProject" }

    ]

    return (
        <>
            <NavBar />
            <HeroComponent title="Hello world! I am Marlon" paragragh="Lorem ipsum dolor amet sit" button="Click here" button_url="#card-carousel" backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
            <CardCarousel data={aboutMeData} sectionTitle="About Me" arrowLink="#icon-blocks" />
            <IconsBlocks data={softSkillsData} sectionTitle="Skills I've picked up along the way" />
            <CardDropdown mainImage={"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"} data={JobsData} sectionTitle="My past jobs" />
        </>
    );
}

export default Home;