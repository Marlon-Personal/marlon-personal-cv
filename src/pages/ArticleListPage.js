import ArticleList from "../components/ArticlesList";
import NavBar from "../components/NavBar";
import articles from "../data/article-content";
import HeroComponent from "../components/HeroComponent";
import Footer from "../components/Footer";
import {useEffect} from 'react';

const ArticlesListPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])


    return (
        <>
            <NavBar />
            <HeroComponent title="Welcome to my personal blog" button="Check my posts" button_url="#articles-body" backgroundImage="https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
        
            <ArticleList articles={articles} />
            <Footer/>
        </>
    );
}

export default ArticlesListPage;