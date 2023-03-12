import CardCarousel from "../components/CardCarousel";


const AboutPage = () => {
    const data = [
        {title: "lorem 1", description: "description lorem 1", image:"https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}, 
        {title: "lorem 2", description: "description lorem 2"},
        {title: "lorem 3", description: "description lorem 3"}
    ]
    return (
        <>
        <h1>About me</h1>
        <div>
            <CardCarousel data={data}/>
        </div>
        </>
    );
}

export default AboutPage;