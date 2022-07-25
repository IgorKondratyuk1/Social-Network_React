import React from "react";
import s from "./Preloader.module.css";
import preloader from "../../../assets/gifs/preloader.svg";

const Preloader = (props) => {
    return  (<div>
                <img className={s.preloader} src={preloader} alt="Loading..." /> 
            </div>);
}

export default Preloader;