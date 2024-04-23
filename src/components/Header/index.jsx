import { FaGithub } from "react-icons/fa";
import styles from "./style.module.scss"

export const Header = () => {
    return(
        <header className="container-header">
            <div className={styles.headerBox}>
                <h1>Message List</h1>
                <nav>
                    <a href="https://github.com/Vinicius-Mioto/Message-List-ViniiiniV" target="_blank"><FaGithub size={35} /></a>
                </nav>
            </div>
        </header>
    )
}