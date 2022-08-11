import "./product.css"
import { useState } from "react"

const Product = ({image, image2, link}) =>{

    const [hover, setHover] = useState(false)

    function handleMouseEnter(){
        setHover(true)
    }

    function handleMouseLeave(){
        setHover(false)
    }

    return(
        <div  className="p">
   
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
           

        </div>
        <a href={link} target="_blank" className="p-link">
            <img src={hover ? image2 : image} 
            className="p-img"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
                ></img>

        </a>
        </div>
    )
}

export default Product