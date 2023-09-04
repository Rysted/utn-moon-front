import "./Navigation.css";
import { renderAdminMenu } from "./renderAdminMenu.jsx";

// const usuarioPuebra = {
// nombre: "Milei",
// role: "administrador",
// role: "usuario",
// role: "invitado",
// };

export default function Navigation() {
  return (
    <>
      <div className="menu">{renderAdminMenu()}</div>
    </>
  );
}
