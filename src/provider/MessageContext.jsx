import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const MessageContext = createContext({})

export const MessageProvider = ({children}) =>{
    const [messageList, setMessageList] = useState([])

    const addMessage = (messageData) =>{
        setMessageList([...messageList, messageData])
    }

    const removeMessage = (removeId) =>{
        const newMessageList = messageList.filter(message => message.id !== removeId)
        setMessageList(newMessageList)
        toast.warning("Mensagem deletada")
    }

    return(
        <MessageContext.Provider value={{ messageList, addMessage, removeMessage }}>
            {children}
        </MessageContext.Provider>
    )
}