import React, { useRef } from "react";
import css from "./iconosAnimados.module.scss";
import { Player } from "@lottiefiles/react-lottie-player";

export default function IconosAnimados() {
  const lista = [
    { id: 1, name: "Icono01", url: "https://cdn.lordicon.com/scubrffn.json" },
    { id: 2, name: "Icono02", url: "https://cdn.lordicon.com/bmlkvhui.json" },
    { id: 3, name: "Icono03", url: "https://cdn.lordicon.com/ffpklhrd.json" },
    { id: 4, name: "Icono04", url: "https://cdn.lordicon.com/xekbkxul.json" },
  ];

  const one_icon = useRef(null);
  console.log(one_icon);
  const iconOne = () => one_icon.current.play();

  const IconArray = useRef([]);
  const icons_array = (index) => {
    if (index === 0) {
      let item = IconArray.current[0];
      item.play();
    } else if (index === 1) {
      let item = IconArray.current[1];
      item.play();
    } else if (index === 2) {
      let item = IconArray.current[2];
      item.play();
    } else {
      let item = IconArray.current[3];
      item.play();
    }
  };

  // const icons_array2 = (index) => {
  //   IconArray.current.map((ev, indice) => {
  //     if (index === indice) {
  //       ev.play();
  //     }
  //   });
  // };

  return (
    <section className={css.content_iconos_animados}>
      <h1> ONE ICONO ANIMADOS CON REACT</h1>

      <div className={css.div_icon_one} onMouseOver={iconOne}>
        <Player
          src="https://cdn.lordicon.com/scubrffn.json"
          ref={one_icon}
          autoplay
          // loop
          className={css.icon}
        />
        <span>ICONO</span>
      </div>

      <hr />
      <h1> ARRAY DE ICONOS ANIMADOS CON REACT</h1>
      {lista.map((li, index) => {
        return (
          <div
            key={index}
            onMouseOver={() => icons_array(index)}
            className={css.div_icon_array}
          >
            <span>{li.name}</span>
            <Player
              src={li?.url}
              ref={(ev) => (IconArray.current[index] = ev)}
              // autoplay
              // loop
              className={css.icon}
            />
          </div>
        );
      })}
    </section>
  );
}
