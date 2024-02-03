import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const ResidentCard = ({ url }) => {
    const [resident, getResident] = useFetch();

    useEffect(() => getResident(url), []);

    return (
        <article>
            <figure>
                <img src={resident?.image} alt="resident image" />

                <figcaption>
                    <div></div>
                    <p>{resident?.status}</p>
                </figcaption>
            </figure>

            <h3>{resident?.name}</h3>
            <ul>
                <li><span>Specie: </span><span>{resident?.species}</span></li>
                <li><span>Origin: </span><span>{resident?.origin.name}</span></li>
                <li><span>Episodes where appear: </span><span>{resident?.episode.length}</span></li>
            </ul>

            <hr />
        </article>
    );
};