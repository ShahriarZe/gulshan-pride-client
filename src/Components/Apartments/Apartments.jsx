import { useEffect, useState } from "react";
import ApartCard from "./ApartCard";

const Apartments = () => {
    const [apart, setApart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch('/apartment.json')
            .then(res => res.json())
            .then(data => setApart(data))
    }, []);

    const maxPages = Math.ceil(apart.length / itemsPerPage);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < maxPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = apart.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6 py-10">
                {currentItems.map(item => (
                    <ApartCard key={item.ID} item={item}></ApartCard>
                ))}
            </div>
            <div className="flex justify-end mt-4 mb-4 max-w-7xl mx-auto">
                <button onClick={prevPage} className="mx-2 p-2 btn btn-outline  btn-sm">
                    Previous
                </button>
                {[...Array(maxPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-2 rounded-full btn btn-sm btn-outline  ${
                            currentPage === index + 1 ? ' ' : 'bg-gray-400'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={nextPage} className="mx-2 p-2 btn btn-outline btn-sm ">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Apartments;
