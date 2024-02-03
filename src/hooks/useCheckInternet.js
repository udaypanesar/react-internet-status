import { useEffect, useState } from "react";

const useCheckInternet = () => {
  const [status, setStatus] = useState(navigator.onLine);
  
  const onChangeStatus = () => {
    setStatus(navigator.onLine)
  }
  
  useEffect(() => {
   
    window.addEventListener("online", onChangeStatus);
    window.addEventListener("offline",onChangeStatus);

    //Clean up function to remove listners
    return () => {
      window.removeEventListener("online",onChangeStatus);
      window.removeEventListener("offline",onChangeStatus);
    };
  }, []);

  return status;
};

export default useCheckInternet;
