import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';
import { LocationCard } from './components/LocationCard';
import { ResidentCard } from './components/ResidentCard';

function App() {
    const [location, getLocation, isLoading, hasError] = useFetch();
    const [finder, setFinder] = useState(Math.floor(Math.random() * 126 + 1));

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/location/${finder}`;

        getLocation(URL);
    }, [finder]);

    const textSearch = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        setFinder(textSearch.current.value.trim());
    };

    return (
        <div>
            {isLoading ?
                <h2>Loading...</h2>
                :
                <>
                    <h2>Rick & Morty</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            ref={textSearch}
                            placeholder='Type a number (1 to 126'
                        />

                        <button>Search</button>
                    </form>

                    {hasError || finder === '0' ?
                        <h2>Location not found.</h2>
                        :
                        <>
                            <LocationCard location={location} />

                            {location?.residents.map(resident => (
                                <ResidentCard
                                    url={resident}
                                    key={resident}
                                />
                            ))}
                        </>
                    }
                </>
            }
        </div>
    );
}

export default App
