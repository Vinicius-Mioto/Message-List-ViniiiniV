import { Header } from "../../components/Header"
import { HomePageContent } from "../../components/contentsPages/HomePageContent"

export const HomePage = () => {
    return(
        <>
            <Header />
            <main className="container-page">
                <HomePageContent />
            </main>
        </>
    )
}