import NavBar from "../components/NavBar";
import CardCarouselExtended from "../components/CardCarouselExtended";
import jobs from '../data/jobs'
import Footer from "../components/Footer";


const MyJobsPage = () => {

    return (
        <>
        <NavBar/>
        <div>
            <CardCarouselExtended data={jobs.extendedData[0]} isReverse={false}/>
            <CardCarouselExtended data={jobs.extendedData[1]} isReverse={true}/>
            <CardCarouselExtended data={jobs.extendedData[2]} isReverse={false}/>
        </div>
        <Footer/>
        </>
    );
}

export default MyJobsPage;