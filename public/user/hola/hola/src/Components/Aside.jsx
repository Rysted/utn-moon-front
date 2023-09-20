import { useState } from "react";
// import "../css/Aside.css";
// import Search from "./Search";

function Aside({ function1, function2 }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <ul className="lista">
            <div className="logo" />

            <div className="search_bar">
              <label for=""></label>
              <input type="search" placeholder="Busca tu producto..." />
              <button>
                <i class="bi bi-search"></i>
              </button>
            </div>

            {/* <Search buscarValor={function1} handleSubmit={function2} /> */}

            <div className={open ? "aside_item open" : "aside_item"}>
              <div className="aside_title">
                <span>Productos</span>
                <i
                  class="bi bi-chevron-down toggle_btn"
                  onClick={() => setOpen(!open)}
                ></i>
              </div>

              <div className="aside_content">Categoria</div>
              <div className="aside_content">Categoria2</div>
              <div className="aside_content">Categoria3</div>
              <div className="aside_content">Categoria4</div>
            </div>

            <li>
              <a href="">Suscribite</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
