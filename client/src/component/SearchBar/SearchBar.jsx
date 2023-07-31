import styled from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    
    return (
        <div className={styled.search}>
            <input
                type="search"
                placeholder="Search by name..."
                name="id"
            />
            <button
                onClick={() => onSearch("buscar por nombre")}
            >Search</button>
        </div>

    )
}

export default SearchBar;