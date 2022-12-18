import {Outlet} from '@remix-run/react'
import css from "s/Header.css"
import logo from "~/../public/assets/TwentyLogo.png";
export function links() {
  return [
    {rel: "Stylesheet", href: css
          },
  ];
}
export default function Twenty() {
  return (
    <main>
  <nav id="hamNav">
  <label htmlFor="hamburger">&#9776;</label>
  <input type="checkbox" id="hamburger"/>

  
  <div id="hamItems">
    <a href="#homee">Inicio</a>
    <a href="#Optimic">Optimizaciones</a>
    <a href="#testim">Reseñas</a>
   <div>
   <a href="https://discord.gg/bAME2FnTdG" target="_blank">Discord</a>
   </div>
  </div>
</nav>
      <Outlet/>
      <footer>
        <p>Copyright
<span> ©Twenty Shop</span></p>
      </footer>
</main>
  );
}
