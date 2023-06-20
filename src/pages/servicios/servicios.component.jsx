import { useState } from "react";
import "./servicios.style.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const serviciosData = [
  {
    title: "Instalación de CCTV",
    description:
      "Ofrecemos servicios profesionales de instalación de circuito cerrado de televisión (CCTV). Nuestro equipo de expertos se encargará de brindarte soluciones personalizadas para garantizar la seguridad de tu hogar o negocio. Con tecnología de vanguardia y un enfoque en la calidad, puedes estar seguro de que tu sistema de CCTV estará funcionando de manera óptima para proteger lo que más te importa.",
    image: "./circuito-cerrado.jpeg",
  },
  {
    title: "Arreglo y Mantenimiento de Computadoras y Laptops",
    description:
      "¿Tienes problemas con tu computadora o laptop? No te preocupes, nuestro equipo de especialistas está listo para ayudarte. Realizamos reparaciones y mantenimiento de equipos informáticos con rapidez y eficiencia. Ya sea que necesites resolver problemas de software, reemplazar componentes o mejorar el rendimiento de tu dispositivo, estamos aquí para brindarte soluciones confiables y personalizadas. Recupera la funcionalidad y el rendimiento de tu computadora con nuestro servicio de calidad.",
    image: "./arreglo-de-computadores.jpg",
  },
  {
    title: "Arreglo y Mantenimiento de Celulares",
    description:
      "En nuestro centro de reparación de celulares, nos especializamos en solucionar problemas comunes y complejos de dispositivos móviles. Desde pantallas rotas y baterías agotadas hasta problemas de carga y fallos en el sistema operativo, nuestro equipo técnico capacitado puede resolver una amplia gama de problemas. Utilizamos repuestos de calidad y técnicas de reparación avanzadas para garantizar resultados duraderos. Confía en nosotros para devolverle la vida a tu teléfono y mantenerlo funcionando sin problemas.",
    image: "./reparacion-celular.jpg",
  },
];

export const ServiciosComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? serviciosData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === serviciosData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const servicio = serviciosData[activeIndex];

  return (
    <div id="servicios" className="servicios-container">
           <Typography gutterBottom variant="h5" component="div">
          Nuestros Servicios
          </Typography>
      <Card>
        <CardMedia
          component="img"
          alt={servicio.title}
          image={servicio.image}
          className="servicio-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {servicio.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {servicio.description}
          </Typography>
        </CardContent>
      </Card>
      <div className="arrow-container">
        <Button onClick={handlePrev}>Prev </Button>

        <Button onClick={handleNext}>Next </Button>
      </div>
    </div>
  );
};
