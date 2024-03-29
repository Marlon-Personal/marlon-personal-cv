import { useParams } from 'react-router-dom';
import Article from '../components/Article';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import articles from '../data/article-content';
import NotFoundPage from './NotFoundPage';
import {useEffect} from 'react';

const ArticlePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])


    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    if(!article){
        return <NotFoundPage />
    }

    return (
        <>
        <NavBar />
        <div className="article-wrapper">
        <Article article={article} backPage="/articles"/>
        </div>
<Footer/>
        </>
    );
}

export default ArticlePage;