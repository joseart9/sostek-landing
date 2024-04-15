import React from 'react';
import './PeopleCard.css';

interface PeopleCardProps {
    name?: string;
    role?: string;
    img?: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
    name,
    role,
    img,
}) => {
    return (
        <div className="card">
            <figure>
                <img src={img} alt="img" />
            </figure>
            <div className="card-body">
                <h2>{name}</h2>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default PeopleCard;
