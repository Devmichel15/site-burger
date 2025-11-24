import { GiHamburger } from "react-icons/gi";

import "../styles/home.css";

import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.jpg";
import burger3 from "../assets/burger3.jpg";

function Home() {
  return (
    <div>
      {/* Hero / Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Bem-vindo ao Puro Gosto{" "}
            <GiHamburger style={{ marginLeft: "10px" }} />
          </h1>
          <p>O melhor sabor, rápido e irresistível!</p>
          <button className="btn-hero">
            <a
              href="https://wa.me/244928536339?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20no%20Puro%20Gosto."
              target="_blank"
              class="btn-pedido"
            >
              Fazer Pedido
            </a>
          </button>
        </div>
      </section>

      {/* Cards do Menu */}
      <section className="menu-cards">
        <h2>Nossos Pratos</h2>
        <div className="cards-container">
          <div className="card">
            <img src={burger1} alt="Burger Clássico" />
            <h3>Burger Clássico</h3>
            <p>Delicioso hambúrguer com queijo, alface e molho especial.</p>
          </div>
          <div className="card">
            <img src={burger2} alt="Burger Duplo" />
            <h3>Burger Duplo</h3>
            <p>Dois hambúrgueres suculentos com bacon e cheddar.</p>
          </div>
          <div className="card">
            <img src={burger3} alt="Combo Especial" />
            <h3>Combo Especial</h3>
            <p>Burger + batata frita + refrigerante, combo completo!</p>
          </div>
        </div>
      </section>

      {/* Seção Sobre / Destaques */}
      <section className="about">
        <h2>Por que escolher a puro gosto?</h2>
        <p>
          Ingredientes frescos, atendimento rápido e o sabor que conquista
          qualquer cliente.
        </p>
      </section>
    </div>
  );
}

export default Home;
