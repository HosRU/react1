import Styles from "./Header.module.css";

export default function Header(){
    return(
        <header className={Styles.header}>
            <h1 className={Styles.title}>Оставь заметочку, будь первым!</h1>
        </header>
    )
}