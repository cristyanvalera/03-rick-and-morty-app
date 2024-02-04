import { useEffect, useRef, useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { LocationCard } from './components/LocationCard';
import { ResidentCard } from './components/ResidentCard';
import { Pagination } from './components/Pagination';

function App() {
    const [location, getLocation, isLoading, hasError] = useFetch();
    const [finder, setFinder] = useState(Math.floor(Math.random() * 126 + 1));
    const [currentPage, setCurrentPage] = useState(1);
    const textSearch = useRef();

    const quantity = 5;
    let second = currentPage * quantity;
    let first = second - quantity;
    const totalPages = location && Math.floor(location.residents.length / quantity) + 1;

    let residentsPart = location && location.residents.slice(first, second);

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/location/${finder}`;

        getLocation(URL);
    }, [finder]);


    const handleSubmit = event => {
        event.preventDefault();

        setFinder(textSearch.current.value.trim());
    };

    return (
        <div className='app'>
            {isLoading ?
                <h1>Loading...</h1>
                :
                <>
                    <h1>Rick & Morty</h1>

                    <form onSubmit={handleSubmit} className='app-form'>
                        <input
                            className='app-text'
                            type="number"
                            ref={textSearch}
                            placeholder='Type a number (1 to 126'
                        />

                        <button className='app-btn'>Search</button>
                    </form>

                    {hasError || finder === '0' ?
                        <h2>Location not found.</h2>
                        :
                        <>
                            <LocationCard location={location} />

                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                            />

                            <div className='app-container'>
                                {residentsPart.map(resident => (
                                    <ResidentCard
                                        url={resident}
                                        key={resident}
                                    />
                                ))}
                            </div>

                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                            />
                        </>
                    }
                </>
            }
        </div>
    );
}

export default App
