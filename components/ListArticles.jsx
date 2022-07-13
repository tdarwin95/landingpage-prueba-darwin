import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function  ListArticles ({articles}){
    console.log(articles)
    return (
        <div className="cards-acticulos" >
            {articles.map(article => (
                <div className="card-articulo" key={article.id}>
                    <Image
                        src={article.image}
                        width={270}
                        height={204}
                        alt={'Imagen del artculo'}
                    />
                    <div className="descriccion">
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>

                    <Link
                        href={{
                        pathname: '/article/[id]',
                        query: { id: article.id,
                                 img: article.image,
                                 category: article.category,
                                 title: article.title,
                                 content: article.content,
                                },
                        }}
                    >
                        <a className='ver-mas'>VER MAS</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ListArticles