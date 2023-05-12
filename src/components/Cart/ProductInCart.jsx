import useCrudCart from "../../hooks/useCrudCart";
import './style/productInCart.css'


const ProductInCart = ({ prodCart }) => {
  const { deleteProductFromCart } = useCrudCart();

  const handleDeleteCart = () => {
    deleteProductFromCart(prodCart.id);
  };

  return (
    <article className="prodcart">
      <header className="prodcart__header">
        <img className="prodcart__img productCart__img" src={prodCart.product.images[0].url} alt="" />

      </header>
      <div className="prodcart__body">
         <h4 className="prodcart__subtitle">{prodCart.product.brand}</h4>
        <h3 className="prodcart__name">{prodCart.product.title}</h3>
      <button className="prodcart__btn_delete" onClick={handleDeleteCart}>
        <i className="bx bx-trash"></i>
      </button>
      </div>
     <footer>
        <span className="prodcart_quantity">{prodCart.quantity}</span>
        <div>
          <span className="prodcart__subtotal">Subtotal:</span>
          <span className="prodcart__price">{prodCart.product.price * prodCart.quantity}</span>
        </div>
      </footer>
    </article>
  );
};

export default ProductInCart;
