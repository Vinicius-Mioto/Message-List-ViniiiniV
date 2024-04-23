import { IoIosArrowForward } from "react-icons/io";
import styles from "./style.module.scss";
import { useContext, useState } from "react";
import { MessageContext } from "../../../../provider/MessageContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export const FormSection = () =>{
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const { addMessage } = useContext(MessageContext)

    const handleCreateMessage = (event) => {
        event.preventDefault()
        if(name === "" || message === ""){
            return toast.error("Complete todos os espaços")
        }else{
            const newMessage = {
              id: uuidv4(),
              name: name,
              message: message
            };
            addMessage(newMessage)
            setName("")
            setMessage("")
            toast.success("Mensagem criada")
        }
    }

    return(
        <form className={styles.formBox}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Digite um nome" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label htmlFor="message">Mensagem</label>
                <textarea name="" id="message" placeholder="Digite uma mensagem" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
            </div>
            <button onClick={handleCreateMessage}>Enviar mensagem<IoIosArrowForward /></button>
        </form>
    )
}