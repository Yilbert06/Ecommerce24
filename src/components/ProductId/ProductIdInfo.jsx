import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import './style/productIdInfo.css'

const ProductIdInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const {addProductToCart} = useCrudCart()

const handlePlus = () => setQuantity(quantity + 1)

const handleMinus = () => {
    setQuantity(quantity - 1)

    if(quantity -1 <= 1){
        setQuantity(quantity -1)
    }
};

const handleAddToCart = () =>{
    const data={
        quantity,
        productId: product.id
    }
    addProductToCart(data)
}

  return (
    <div>
        <section className='prodInfo'>
            <h3 className='prodInfo__subtitle'>{product?.brand}</h3>
            <h2 className='prodInfo__title'>{product?.title}</h2>
            <p className='prodInfo__description'>{product?.description}</p>
            <footer className='prodInfo__footer'>
                <div className='prodInfo__price'>
                    <span className='prodInfo__price-label'>Price</span>
                    <span className='prodInfo__price-value'>{product?.price}</span>
                </div>
                <div className='prodInfo__quantity'>
                    <span className='prodInfo__quantity-label'>Quantity</span>
                    <div className='prodInfo__container'>
                    <button className='prodInfo__counter-minus' onClick={handleMinus}>-</button>
                    <div className='prodInfo__count'>{quantity}</div>
                    <button className='prodInfo__plus' onClick={handlePlus}>+</button> 
                    </div>
                </div>
                <button className='prodInfo__btn' onClick={handleAddToCart}>Add to car <i className='bx bx-cart'></i></button>
            </footer>
        </section>

    </div>
  )
}

export default ProductIdInfo