import { useDispatch } from "react-redux";
import styled from "./SearchBar.module.css";
import { useState } from "react";
import { searchVideogame } from "../../redux/action";

const SearchBar = () => {;
    const [inputState, setInputState] = useState("")
    const dispatch = useDispatch()

    const handlerSearch = () => {
        // onSearch(nameInput)
        console.log(inputState);
        dispatch(searchVideogame(inputState))
        setInputState("");
    }

    const handlechange = (event) => {
        setInputState(event.target.value)
        console.log(event.target.value);
    }

    return (
        <div className={styled.search}>
            <input
                type="search"
                placeholder="Search by name..."
                name="nameInput"
                onChange={handlechange}
                value={inputState}
            />
            <button onClick={handlerSearch}>Search</button>
        </div>

    )
}

export default SearchBar;