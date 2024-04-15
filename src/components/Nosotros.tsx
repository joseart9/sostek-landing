import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Imagen de encabezado" className="w-full" />
      <div className="flex justify-center w-full py-4 gap-4">
        <div className="bloque">
          <h2 className="text-xl font-bold">Bloque 1</h2>
          <p>¿Cómo nace Sostek?</p>
          <p>Este proyecto surge de un interés por generar una cultura de sostenibilidad a través de la educación.
             Una previa etapa de investigación, nos permitió detectar áreas de oportunidades en los planes educativos
             de las diversas carreras involucradas.
             Combinando esfuerzos de educadores y estudiantes generamos la primera versión de SOSTEK, una plataforma digital
             que se alimentaría de los contenidos y requerimientos en temas de sostenibilidad, presentes en los proyectos
              desarrollados en nuestra facultad.</p>
          <textarea className="textarea" rows={4} cols={50}></textarea>
        </div>
        <div className="bloque">
          <h2 className="text-xl font-bold">Bloque 2</h2>
          <p>Iniciativa NOVUS</p>
          <p>NOVUS es una iniciativa del Tecnológico de Monterrey que apoya al desarrollo de ideas innovadoras a través
             de proyectos prácticos y de investigación. El propósito de NOVUS es fomentar la participación estudiantil en
             la implementación de medidas de mejora en el contenido educativo de sus respectivas facultades.  </p>
          <textarea className="textarea" rows={4} cols={50}></textarea>
        </div>
        <div className="bloque">
          <h2 className="text-xl font-bold">Bloque 3</h2>
          <p>¿Quiénes somos?</p>
          <p>Somos un equipo de educadores y alumnos interesados en el desarrollo de estrategias encaminadas a una mayor
             comprensión del alcance de los proyectos académicos como respuesta a las necesidades culturales, económicas
             y ambientales de la sociedad. </p>
          <textarea className="textarea" rows={4} cols={50}></textarea>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
