import ReactDOM from 'react-dom/client'
import InternetStatus from './components/InternetStatus';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <InternetStatus/>
    <ToastContainer position= "top-center" autoClose= "2000" theme= "colored" closeOnClick />
    </>
)
