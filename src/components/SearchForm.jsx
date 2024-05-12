import { useRef } from "react";

export const SearchForm = ({ setFinder }) => {
    const textSearch = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        setFinder(textSearch.current.value.trim());
    };

    return (
        <form onSubmit={handleSubmit} className='app-form'>
            <input
                className='app-text'
                type="number"
                ref={textSearch}
                placeholder='Type a number (1 to 126)'
                min="1"
            />

            <button className='app-btn'>Search</button>
        </form>
    );
};
