import { Metadata } from "next"

type  Props = {
    params :{
        productid:string
    }
}

export const generateMetadata = async ({params,} :Props ) : Promise<Metadata> =>{
    const title = await  new Promise(resolve => {
        setTimeout( () => {
            resolve(`Iphone ${params.productid}`)
        },100)
    } )
    return {
        title : `Product ${title}`
    }
}
export default function ProductDetails({params,} :Props )
{
    return <h1>Details about product {params.productid}</h1>
}