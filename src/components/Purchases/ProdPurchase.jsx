import './style/purchases.css'
const ProdPurchase = ({prodPurchase}) => {


  return (


    <article className="purchase">
        <img className="purchase__img" src={prodPurchase.product.images[0].url} alt="" />
        <h3 className="purchase__name">{prodPurchase.product.title}</h3>
        <span className="purchase__quantity">{prodPurchase.quantity}</span>
        <span className="purchase__price">{prodPurchase.quantity * prodPurchase.product.price}</span>
    </article>


  )
}

export default ProdPurchase