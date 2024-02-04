import { useEffect, useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { LocationCard } from './components/LocationCard';
import { ResidentCard } from './components/ResidentCard';
import { Pagination } from './components/Pagination';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';

function App() {
    const [location, getLocation, isLoading, hasError] = useFetch();
    const [finder, setFinder] = useState(Math.floor(Math.random() * 126 + 1));
    const [currentPage, setCurrentPage] = useState(1);

    const quantity = 5;
    let second = currentPage * quantity;
    let first = second - quantity;
    const totalPages = location && Math.floor(location.residents.length / quantity) + 1;

    let residentsPart = location && location.residents.slice(first, second);

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/location/${finder}`;

        getLocation(URL);
    }, [finder]);

    return (
        <div className='app'>
            <Header />

            {isLoading ?
                <h1>Loading...</h1>
                :
                <>
                    <h1>Rick & Morty</h1>

                    <SearchForm setFinder={setFinder} />

                    {hasError || finder === '0' ?
                        <h2>Location not found.</h2>
                        :
                        <>
                            <LocationCard location={location} />

                            {residentsPart.length > 0 ?
                                <>
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
                                :
                                <div></div>
                            }
                        </>
                    }
                </>
            }
        </div>
    );
}

export default App
