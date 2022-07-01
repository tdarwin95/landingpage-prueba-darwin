import React from 'react'
import Image from 'next/image'

function  ListArticles ({articles}){
    console.log(articles)
    return (
        <div className="cards-acticulos">
            {articles.map(article => (
                <div className="card-articulo">
                    <Image
                        src={article.image}
                        width={270}
                        height={204}
                    />
                    <div className="descriccion">
                        <h1>{article.title}</h1>
                        <p>{article.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListArticles