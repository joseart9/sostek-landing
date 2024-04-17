import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PeopleCard from "@/components/PeopleCard";

const people = [
  {
    name: "User",
    role: "Role",
  },
  {
    name: "User",
    role: "Role",
  },
  {
    name: "User",
    role: "Role",
  },
  {
    name: "User",
    role: "Role",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section id="carousel" className="w-full">
        <Carousel />
      </section>
      <h2 className="text-2xl mt-10 mb-5">
        Nuestro equipo
      </h2>
      <section className="flex flex-wrap justify-center gap-4 p-4" id="equipo">
        {people.map((person, index) => (
          <PeopleCard
            key={index}
            name={person.name}
            role={person.role}
            img="https://source.unsplash.com/random"
          />
        ))}
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
