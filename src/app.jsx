import { NavbarComponent } from "./common/navbar/navbar.component"
import { BienvenidoComponent } from "./pages/bienvenido/bienvenido.component"
import { ContactoComponent } from "./pages/contacto/contacto.component"
import { QuienesSomosComponent } from "./pages/quienes-somos/quienes-somos.component"
import { ServiciosComponent } from "./pages/servicios/servicios.component"

export const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <BienvenidoComponent/>
      <QuienesSomosComponent/>
      <ServiciosComponent/>
      <ContactoComponent/>
    </div>
  )
}
