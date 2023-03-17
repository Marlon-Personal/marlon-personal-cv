import NavBar from "../components/NavBar";
import CardCarouselExtended from "../components/CardCarouselExtended";
import jobs from '../data/jobs'
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";


const MyJobsPage = () => {

    return (
        <>
        <NavBar/>
        <div>
            <HeroComponent title="My jobs" button="Check my jobs!" button_url="#carouselJob0" backgroundImage="https://images.unsplash.com/photo-1662147238273-e1fe1cdb693b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" />
            <CardCarouselExtended data={jobs.extendedData[0]} idCarousel={'carouselJob0'} isReverse={false}/>
            <CardCarouselExtended data={jobs.extendedData[1]} idCarousel={'carouselJob1'} isReverse={true}/>
            <CardCarouselExtended data={jobs.extendedData[2]} idCarousel={'carouselJob2'} isReverse={false}/>
        </div>
        <Footer/>
        </>
    );
}

export default MyJobsPage;