import React from "react";
import css from "./iconos.module.scss";
import { FaDeezer, FaFacebook, FaReact, FaUbuntu, FaUser } from "react-icons/fa";
import { BiAlarm } from "react-icons/bi";


import *  as FaIcons from "react-icons/fa";
import *  as BiIcons from "react-icons/bi";



export default function Iconos() {
  return (
    <section className={css.content_iconos}>
      <article>
        <h1>PRIMERA FORMA REACT ICONS</h1>
        <strong className={css.item_ico}>
          <FaUbuntu />
        </strong>
        <strong className={css.item_ico}>
          <FaUser />
        </strong>
        <strong className={css.item_ico}>
          <FaDeezer />
        </strong>
        <strong className={css.item_ico}>
          <FaReact />
        </strong>
        <strong className={css.item_ico}>
          <FaFacebook />
        </strong>
        <br />
        <strong className={css.item_ico}>
          <BiAlarm />
        </strong>
      </article>
      <hr />
      <article>
        <h1>SEGUNDA FORMA DE REACT ICONS</h1>
        <strong className={css.item_ico}>
          <FaIcons.FaUbuntu />
        </strong>
        <strong className={css.item_ico}>
          <FaIcons.FaUser />
        </strong>
        <strong className={css.item_ico}>
          <FaIcons.FaDeezer />
        </strong>
        <strong className={css.item_ico}>
          <FaIcons.FaReact />
        </strong>
        <strong className={css.item_ico}>
          <FaIcons.FaFacebook />
        </strong>
        <br />
        <strong className={css.item_ico}>
          <BiIcons.BiAlarm />
        </strong>
      </article>
    </section>
  );
}
