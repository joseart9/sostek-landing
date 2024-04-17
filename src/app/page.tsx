import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PeopleCard from "@/components/PeopleCard";
import Nosotros from "@/components/Nosotros";

const peopleData = [
  { name: 'Martha Nuñez', role: 'Directora', img: 'imagen1.jpg', description: 'Directora de Carrera de Diseño Industrial, Tecnológico de Monterrey, campus Monterrey, México. Doctorado con Birmingham City University, Reino Unido. Directora de Carrera de Diseño Industrial, Tecnológico de Monterrey, campus Monterrey, México. Doctorado con Birmingham City University, Reino Unido. ' },
  { name: 'Daniel Savedra', role: 'Director asociado', img: 'imagen2.jpg', description: 'Arquitecto con una vista del desarrollo de las ciudades desde una visión holística de sistemas complejos.' },
  { name: 'Pedro Dario', role: 'Estudiante de Arquitectura', img: 'imagen3.jpg', description: 'En 2021 formo parte del equipo para la exposición del Tecnológico de Monterrey en la 17 º edición de la Bienal de Arquitectura de Venecia.' },
  { name: 'Diana Montañez', role: 'Licenciada en Animación y Arte Digital', img: 'imagen4.jpg', description: 'Mis intereses son diseño editorial, diseño conceptual e innovación. ' },
  { name: 'Aura Elena', role: 'Profesora', img: 'imagen5.jpg', description: 'Profesora interesada en colaborar con instituciones nacionales e internacionales en el fortalecimiento de acciones para reducir el cambio climático y lograr avances en mecanismos ambientales para un desarrollo sustentable.' },
  { name: 'Eduardo Ferrer', role: 'Doctor en Ciencias de la Computación', img: 'imagen6.jpg', description: 'Mis intereses son el avance de tecnologías como simuladores, aplicaciones y videojuegos que mejoren el proceso de enseñanza-aprendizaje, adaptándose a los intereses y estilos de cada individuo.' },
  { name: 'Santiago Penaloza', role: 'Ex colaborador', img: 'imagen7.jpg', description: 'Estudiante de LAD' },
  { name: 'Fernando Fonseca', role: 'Ex colaborador', img: 'imagen8.jpg', description: 'Estudiante de LAD' },
  { name: 'Sebastian Zafra', role: 'Ex colaborador', img: 'imagen9.jpg', description: 'Estudiante de LAD' },
  { name: 'Marisol Sanchez', role: 'Ex colaborador', img: 'imagen10.jpg', description: 'Estudiante de IDS' },
  { name: 'Alexis Sanchez', role: 'Ex colaborador', img: 'imagen10.jpg', description: 'Estudiante de LAD' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section id="carousel" className="w-full">
        <Carousel />
      </section>
      <section>
        <Nosotros />
      </section>
      <h2 className="text-2xl mt-10 mb-5">
        Nuestro equipo
      </h2>
      <section className="flex flex-wrap justify-center gap-4 p-4" id="equipo">
        <PeopleCard people={peopleData} />
      </section>
      <section>
        <Contact />
      </section>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>

  );
}
