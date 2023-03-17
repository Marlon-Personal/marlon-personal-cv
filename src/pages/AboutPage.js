import NavBar from "../components/NavBar";
import CardCarouselExtended from "../components/CardCarouselExtended";
import jobs from '../data/jobs'
import Footer from "../components/Footer";


const AboutPage = () => {

    return (
        <>
        <NavBar/>
        <div>
            <CardCarouselExtended data={jobs.extendedData[0]}/>
            <CardCarouselExtended data={jobs.extendedData[1]}/>
            <CardCarouselExtended data={jobs.extendedData[2]}/>
        </div>
        <Footer/>
        </>
    );
}

export default AboutPage;