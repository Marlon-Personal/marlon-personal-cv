import ArticleList from "../components/ArticlesList";
import NavBar from "../components/NavBar";
import articles from "./article-content";
import HeroComponent from "../components/HeroComponent";

const ArticlesListPage = () => {
    return (
        <>
            <NavBar />
            <HeroComponent title="Welcome to my personal blog" paragragh="Lorem ipsum dolor amet sit" button="Click here" button_url="#articles-body" backgroundImage="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" />
        
            <ArticleList articles={articles} />
        </>
    );
}

export default ArticlesListPage;