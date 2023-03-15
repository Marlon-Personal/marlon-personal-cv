import { useParams } from 'react-router-dom';
import Article from '../components/Article';
import NavBar from '../components/NavBar';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    if(!article){
        return <NotFoundPage />
    }

    return (
        <>
        <NavBar />
            <Article article={article} backPage="/articles"/>
        </>
    );
}

export default ArticlePage;