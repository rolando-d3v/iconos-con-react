import React from "react";
import css from "./app.module.scss";
import Iconos from "./components/iconos/Iconos";
import IconosAnimados from "./components/iconos_animados/IconosAnimados";
import Frame from "./components/figma/Framer";


function App() {
  return (
    <div className={css.app}>
      <Iconos />
      <IconosAnimados />
      {/* <Frame /> */}
     
    </div>
  );
}

export default App;
