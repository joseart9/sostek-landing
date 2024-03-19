import Carousel from "@/components/Carousel";
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
    <div className="flex flex-col">
      <section id="carousel">
        <Carousel />
      </section>
      <section className="flex flex-row p-4 space-x-4" id="equipo">
        {people.map((person, index) => (
          <PeopleCard
            key={index}
            name={person.name}
            role={person.role}
            img="https://source.unsplash.com/random"
          />
        ))}
      </section>
    </div>
  );
}
