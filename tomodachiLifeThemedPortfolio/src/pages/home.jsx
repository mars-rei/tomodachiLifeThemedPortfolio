import { useState, useEffect } from "react";

import desktopLogo from "../assets/desktop_logo.svg";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <div id="desktopLoading" className={isLoading ? "" : "hidden"}>
        <img id="desktopLogo" src={desktopLogo} />
      </div>
    </>
  )
}

export default Home;