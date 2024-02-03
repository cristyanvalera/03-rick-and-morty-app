import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import './styles/resident-card.css';

export const ResidentCard = ({ url }) => {
    const [resident, getResident] = useFetch();

    useEffect(() => getResident(url), []);

    return (
        <article className="resident">
            <figure className="resident-photo">
                <img src={resident?.image} alt="resident image" />

                <figcaption className="resident-status">
                    <div className={`resident-circle ${resident?.status}`}></div>
                    <p>{resident?.status}</p>
                </figcaption>
            </figure>

            <h3 className="resident-name">{resident?.name}</h3>
            <hr />
            <ul className="resident-list">
                <li className="resident-item"><span>Specie: </span><span>{resident?.species}</span></li>
                <li className="resident-item"><span>Origin: </span><span>{resident?.origin.name}</span></li>
                <li className="resident-item"><span>Episodes where appear: </span><span>{resident?.episode.length}</span></li>
            </ul>
        </article>
    );
};