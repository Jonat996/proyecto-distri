import { WhatsApp, Facebook, Email, Instagram } from "@mui/icons-material";
import "./contacto.style.css";

export const ContactoComponent = () => {
  return (
    <div id="contacto" className="contacto-container">
      <h2>
      Contacto:
      </h2>
      <div className="social-icons">
     
    <a href="https://www.whatsapp.com">  <WhatsApp className="icon" /> </a>
      
        <a href="https://www.facebook.com">    <Facebook className="icon" /> </a>

       
        <a href="https://www.gmail.com">   <Email className="icon" /> </a>
        <a href="https://www.instagram.com">    <Instagram className="icon" /> </a>

      
      </div>
    </div>
  );
};
