import { useEffect, useState } from "react";

const useCheckInternet = () => {
  const [status, setstatus] = useState(null);
  useEffect(() => {
    window.addEventListener("offline", () => setstatus(false));

    window.addEventListener("online", () => setstatus(true));

  }, []);

  return [status]

};

export default useCheckInternet;
