// PeopleCard.tsx
import React from 'react';
import './PeopleCard.css';

interface Person {
    name: string;
    role: string;
    img: string;
    description: string;
}

interface PeopleCardProps {
    people: Person[];
}

const PeopleCard: React.FC<PeopleCardProps> = ({ people }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {people.map((person, index) => (
                <div key={index} className="card">
                    <figure>
                        <img src={person.img} alt="img" />
                    </figure>
                    <div className="card-body">
                        <h2>{person.name}</h2>
                        <p>{person.role}</p>
                        <p>{person.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PeopleCard;

