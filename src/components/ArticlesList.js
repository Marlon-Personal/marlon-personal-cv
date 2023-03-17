import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
    return (
        <>
        <div id="articles-body" className=" flex flex-col items-center h-auto justify-center">
        <h2 className="text-4xl text-center pt-8 mx-6 md:mt-16 md:pb-16 md:pt-0">Check out my articles</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-24 md:mb-18 mx-8 md:mx-32 pb-24 pt-8">
                {articles.map(article => (
                    <div className="shadow-lg px-12 py-8 border hover:scale-105">
                        <Link key={article.name} className="" to={`/articles/${article.name}`}>
                        <img src={article.image} className="h-48 md:h-96" />
                            <h3 className="font-light text-2xl py-4">{article.title}</h3>
                            <p className="font-thin text-md">{article.content[0].substring(3, 300)}...</p>
                        </Link>
                    </div>
                )
                )}
            </div>
            </div>
        </>
    )
}

export default ArticleList