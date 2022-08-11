import "./productList.css"
import Product from "../product/product"
import {products} from "../../data/data.js"

const ProductList = () =>{
    console.log("Products is ", products);
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire 🚀</h1>
                <p className="pl-desc">
                    Below are a few of my personal projects. My projects range from a defi tracker to a newsletter service to a chat application.
                </p>
            </div>
            <div className="pl-list">
            {products.map(item=>{
                return <Product key={item.id} image={item.image} image2={item.image2} link={item.link}/>
            
            })}

            </div>
        </div>
    )
}

export default ProductList