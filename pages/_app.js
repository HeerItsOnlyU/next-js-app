import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("SW Registered"))
        .catch((err) => console.error("SW failed", err));
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
