import "../src/styles/main.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

export const App = () => {
  return (
    <>
      {/* <!-- Navbar--> */}
      <Navbar saludos='hola' />

      {/* <!-- Container --> */}
      <div class="container-fluid">
       <ItemListContainer title="Proyecto React - Ecommerce Productos modelados en impresion 3D" />
      </div>
    </>
  );
};
