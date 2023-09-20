import { useState, useEffect } from "react";
//import './App.css'
import "./Components/MostrarDatos.jsx";
// import MostrarDatos from "./Components/MostrarDatos.jsx";
// import Search from "./Components/Search";
// import Pages from "./Components/Pages";
// import Footer from "./Components/Footer";
// import Aside from "./Components/Aside";
// import Proveedoras from "./Components/Proveedoreas";

function App() {
  // const [select, setSelect] = useState("");
  // const [products, setProducts] = useState([]);
  // const [copiaProducts, setCopiaProducts] = useState([]);
  // const [search, setSearch] = useState();
  // const productsperPage = 3;
  // const [lastPositionArray, setLastPositionArray] = useState(productsperPage);
  // const [positionArray, setPositionArray] = useState(0);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setProducts(copiaProducts.filter(word => word.category === select));
  //   setProducts(
  //     products.filter(prod => prod.title.toLocaleLowerCase().includes(search))
  //   );
  // };
  // const handleChangeText = e => {
  //   setSearch(e.target.value.toLocaleLowerCase());
  // };
  // const handleChangeSelect = categoria => {
  //   setSelect(categoria);
  //   setProducts(copiaProducts.filter(word => word.category === categoria));
  // };
  // const handleChangePositionArray = valor => {
  //   setPositionArray(positionArray + valor);
  //   setLastPositionArray(lastPositionArray + valor);
  // };
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then(res => res.json())
  //     .then(prod => setProducts(prod))
  //     .then(
  //       fetch("https://fakestoreapi.com/products")
  //         .then(res2 => res2.json())
  //         .then(copia => setCopiaProducts(copia))
  //     );
  // }, []);

  return (
    <>
      <div className="main">
        {/* <div className="containerAside"> */}
        {/* <Aside function1={handleChangeText} function2={handleSubmit} /> */}
        {/* </div> */}
        {/* 
        <div className="Select">
          <Proveedoras handleChangeSelect={handleChangeSelect} select={select} />
        </div>

        <div className='containerFather'>

          <div className="containerProducts"> 

            {products.slice(positionArray, lastPositionArray).map((p) => (
              <MostrarDatos key={p.id} items={p} />
            ))}
          </div >

          <div>
            <Pages nroPaginas={Math.ceil(products.length / productsperPage)} changePage={handleChangePositionArray} productsperPage={productsperPage} />
          </div> */}

        {/* </div> */}
        <p>hola</p>
      </div>
      {/* 
          <Footer /> */}
    </>
  );
}

export default App;
