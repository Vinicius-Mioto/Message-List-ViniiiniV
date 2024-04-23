import { IoIosClose } from "react-icons/io";
import styles from "./style.module.scss";
import { useContext } from "react";
import { MessageContext } from "../../../../../provider/MessageContext";

export const MessageCard = ({message}) =>{
    const { removeMessage } = useContext(MessageContext)

    return(
        <li className={styles.cardBox}>
            <div>
                <button onClick={() => removeMessage(message.id)}><IoIosClose size={40} /></button>
                <h2>{message.name}</h2>
            </div>
            <p>{message.message}</p>
        </li>
    )
}