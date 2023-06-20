import { useEffect, useState } from "react";
import "./bienvenido.style.css";

export const BienvenidoComponent = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 1000);

    const subtitleTimeout = setTimeout(() => {
      setShowSubtitle(true);
    }, 2000);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(subtitleTimeout);
    };
  }, []);

  return (
    <div className="curved-container">
      <section>
        <div className="skewed"></div>
      </section>
      <div className="content">
        {showTitle && <h1>Somos Soportic...</h1>}
        {showSubtitle && <h2>Soporte Especializado para ti!</h2>}
      </div>
    </div>
  );
};
