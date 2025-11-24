import { useState } from "react";

import "../styles/shop.css";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.jpg";
import burger3 from "../assets/burger3.jpg";

const products = [
  {
    id: 1,
    name: "Burger Clássico",
    price: 3500,
    description: "Delicioso hambúrguer com queijo, alface e molho especial.",
    img: burger1,
  },
  {
    id: 2,
    name: "Burger Duplo",
    price: 5000,
    description: "Dois hambúrgueres suculentos com bacon e cheddar.",
    img: burger2,
  },
  {
    id: 3,
    name: "Combo Especial",
    price: 7000,
    description: "Burger + batata frita + refrigerante, combo completo!",
    img: burger3,
  },
];

function Shop() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      {/* Carrinho Modal */}
      {showCart && (
        <div className={`cart-modal-overlay ${showCart ? "show" : ""}`}>
          <div className="cart-container">
            <button className="cart-close-btn" onClick={() => setShowCart(false)}>×</button>
            <h2>Meu Carrinho</h2>
            {cart.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <div className="cart-info">
                      <h3>{item.name}</h3>
                      <p>Quantidade: {item.quantity}</p>
                      <p>Preço: {item.price * item.quantity} kzs</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <h3>Total: {total} kzs</h3>
          </div>
        </div>
      )}

      {/* Loja / Produtos */}
      <div className="shop-container">
        <h2>Nosso Menu</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price} kzs</p>
              <button className="btn-add" onClick={() => addToCart(product)}>
                Adicionar
              </button>
            </div>
          ))}
        </div>
        <button className="btn-cart" onClick={() => setShowCart(!showCart)}>
          {showCart ? "Fechar Carrinho" : `Ver Carrinho (${cart.length})`}
        </button>
      </div>
    </div>
  );
}

export default Shop;
