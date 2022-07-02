import {useRouter} from 'next/router'
import Image from 'next/image'
import Layout from '../../components/Layout';
import Link from 'next/link'

function  Article(){

    const router = useRouter();

    const article = router.query;

    console.log(article)

    return(
        <div>
            <Layout/>
            <div className='contenedor-articulo'>
            <Link
                href={{
                pathname: '/'}}
            >
                <a className='atras'>ATRAS</a>
            </Link>

            <div className='cards-acticulos'>
                <div className="card-articulo-mas" key={article.id}>
                    <Image
                        src={article.img}
                        width={1447}
                        height={800}
                    />
                    <div className="descriccion-mas">
                        <h1>{article.title}</h1>
                        <p>{article.content}</p>
                        <h1>CATEGORIA: {article.category}</h1>
                    </div>
                </div>
            </div>



            </div>
        </div>
    )
}

export default Article