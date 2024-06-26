import "./styles/index.scss";
import { HomePage } from './pages/HomePage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {

  return (
    <div className='App'>
      <HomePage />
      <ToastContainer />
    </div>
  )
}

export default App
