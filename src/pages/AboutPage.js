import NavBar from "../components/NavBar";
import CardCarousel from "../components/CardCarousel";
import jobs from '../data/jobs'


const AboutPage = () => {

    return (
        <>
        <NavBar/>
        <div>
            <CardCarousel data={jobs.compresedData}/>
        </div>
        </>
    );
}

export default AboutPage;