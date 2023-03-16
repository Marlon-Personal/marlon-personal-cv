import NavBar from "../components/NavBar";
import CardCarousel from "../components/CardCarousel";
import jobs from '../data/jobs'
import Footer from "../components/Footer";


const AboutPage = () => {

    return (
        <>
        <NavBar/>
        <div>
            <CardCarousel data={jobs.compresedData}/>
        </div>
        <Footer/>
        </>
    );
}

export default AboutPage;