import styled from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    
    return (
        <div className={styled.search}>
            <input
                type="search"
                placeholder="Buscar por nombre..."
                name="id"
            />
            <button
                onClick={() => onSearch("buscar por nombre")}
            >Buscar</button>
        </div>

    )
}

export default SearchBar;