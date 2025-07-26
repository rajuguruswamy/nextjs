export default function ProductReviewList({params,} :{params : {productid: string }} )
{
    return (<div>
        <h1>Product Review List of Product {params.productid} </h1>
        <ul>
            <li>Review 1 </li>
            <li>Review 2 </li>
            <li>Review 3</li>
        </ul> 
    </div>)
   
}