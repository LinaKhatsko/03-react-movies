// Простий компонент-індикатор завантаження.
// - Показує текст (можна замінити на spinner).
// - Викликається, коли isLoading = true в App.
import type { JSX } from "react";
import css from "./Loader.module.css";

const Loader = (): JSX.Element => {
   
    return (
        <p className={css.text}>Loading movies, please wait...</p>);
};

export default Loader;