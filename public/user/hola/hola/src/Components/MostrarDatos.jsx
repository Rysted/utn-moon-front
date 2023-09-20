import "../css/MostrarDatos.css";

const MostrarDatos = ({ items }) => {
  return (
    <article className="containerInfo">
      <div className="containerImage">
        <img src={items.image} />
      </div>

      <div className="containerDescription">
        <p>{items.title}</p>
      </div>
      <button>Sumar al carrito</button>
    </article>
  );
};

export default MostrarDatos;
