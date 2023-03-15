const Article = ({ article, backPage }) => {
    return (
        <>
            <div className="">
                <div style={{ backgroundImage: `url(${article.image})` }} className="bg-center bg-cover md:animate-fade-in h-96 w-full flex items-center justify-center md:mt-0">
                    <h1 className="text-3xl md:text-4xl my-16 text-center font-thin bg-sky-900 text-white py-6 md:px-12 w-3/4 md:w-full">{article.title}</h1>
                </div>
                <div className="mx-2 md:mx-64 mt-14 md:pb-4">
                    <a className="font-thin text-lg mx-12 leading-loose underline text-sky-700 hover:font-normal" href={backPage}>Back to articles</a>
                </div>
                <div className="flex flex-col items-center justify-center mx-2 md:mx-64 mb-14">
                    {article.content.map((paragraph, i) => (
                        <div className="font-thin text-lg mx-12 pb-4 md:pb-12 leading-loose" key={i} dangerouslySetInnerHTML={ {__html: paragraph} }></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Article


