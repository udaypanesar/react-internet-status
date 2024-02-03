import useCheckInternet from "../hooks/useCheckInternet";
import Lottie from "react-lottie";
import noInternet from '../assets/no-internet.json';
import wifiSignal from '../assets/wifi-signal.json';
import { toast } from "react-toastify";
import { useEffect } from "react";

function InternetStatus() {
  const status = useCheckInternet();

  useEffect( () => {
    if (status)
      showNotification(status,"Connected! Enjoy seamless browsing.")
    else
    showNotification(status,"Oops! Lost connection. Please check your internet.")
  },[status]) 

  const showNotification = (internetStatus,msg) => {
    if (internetStatus)
      toast.success(msg)
    else
      toast.error(msg);
  };

  return (
    <>
      <h1 style={{textAlign:"center",color:"white"}}>Internet Status Checker</h1>
      <div style={{margin:"0",
                  display: "flex",
                  placeItems: "center",
                  minWidth:"320px",
                  height:"70vh",
                  flexDirection: "column"}}>
        {status ? <Lottie options={{animationData: wifiSignal}} /> : <Lottie options={{animationData: noInternet}} />}
      </div>
    </>
  );
}

export default InternetStatus;
