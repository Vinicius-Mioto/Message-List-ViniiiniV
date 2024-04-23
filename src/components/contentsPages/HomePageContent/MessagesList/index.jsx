import { useContext } from "react"
import { MessageContext } from "../../../../provider/MessageContext"
import { MessageCard } from "./MessageCard"
import { IoIosList } from "react-icons/io";
import styles from "./style.module.scss"

export const MessageList = () =>{
    const { messageList } = useContext(MessageContext)

    return(
        <div className={styles.flexBox}>
            {messageList.length > 0 ? (
                <ul>
                    {messageList.map(message => (
                        <MessageCard key={message.id} message={message} />
                    ))}
                </ul>
            ) : (
                <div>
                    <p>
                        Digite alguma mensagem ou algum lembrete
                    </p>
                    <span>
                        <IoIosList size={70} />
                    </span>
                </div>
            )}
        </div>
    )
}