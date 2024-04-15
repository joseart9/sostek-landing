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
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default PeopleCard