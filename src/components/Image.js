import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const {toggleFavorite, addCart, removeCart, cartItems} = useContext(Context)
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()

    //El condicional && retorna si es true, en false no retorna nada
    const heartIcon =  
        img.isFavorite ?
            <i onClick={() => toggleFavorite(img.id)}className = "ri-heart-fill favorite"> </i>: 
            hovered && <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
            
    function cartIcon() {
        const alreadyImg = cartItems.some(item => item.id === img.id)
        if(alreadyImg) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeCart(img.id)}></i>            
        }else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addCart(img)}></i>
        }
    }

    return (
        <div 
            ref={ref}
            //Asi estaba antes de poner el hook propio mio
            /*onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}*/ 
            className={`${className} image-container`}>
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}


export default Image