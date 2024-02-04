import './styles/pagination.css';

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const next = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button onClick={prev}>Prev</button>
            <span>{`${currentPage} / ${totalPages}`}</span>
            <button onClick={next}>Next</button>
        </div>
    );
};
