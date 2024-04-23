import { FormSection } from "./FormSection"
import { MessageList } from "./MessagesList"
import styles from "./style.module.scss"

export const HomePageContent = () =>{
    return(
        <section className={styles.sectionBox}>
            <FormSection />
            <MessageList />
        </section>
    )
}