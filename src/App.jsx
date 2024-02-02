import useCheckInternet from "./useCheckInternet";
import Lottie from "react-lottie";
import noInternet from './assets/no-internet.json';
import wifiSignal from './assets/wifi-signal.json';
import { toast } from "react-toastify";

function App() {
  const [status] = useCheckInternet();

  const onError = () => {
    toast("There is no internet", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const onSuccess = () => {
    toast("There is internet", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const noInternetOptions = {
    loop: true,
    autoplay: true,
    animationData: noInternet,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const InternetOptions = {
    loop: true,
    autoplay: true,
    animationData: wifiSignal,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <h1>Internet Status Checker</h1>
      <div>
        {status ? <Lottie options={InternetOptions} /> : <Lottie options={noInternetOptions} />
        }
      </div>
      {status ? onSuccess() : onError()}
    </>
  );
}

export default App;
