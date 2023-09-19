import "./Loading.css";
import loadingCat from "../../assets/images/load/loadingCat.png";
import danceCat from "../../assets/images/load/danceCat.gif";

const Loading = () => {
  return (
    <main className="loading">
      <img
        className="loading__img"
        src={loadingCat}
        alt="Imagen de carga gato fantasma"
      />
      <img
        className="loading__img--dance"
        src={danceCat}
        alt="Imagen de carga gato bailando"
      />
    </main>
  );
};

export default Loading;
