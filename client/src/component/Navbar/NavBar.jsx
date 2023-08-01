import { Link } from "react-router-dom";
import styled from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    // const {videogames,setVideogames} = useState([])
    function onSearch(text){
        window.alert(text);
      }

    return (

        <div className={styled.container}>
            <div className={styled.contmenu}>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/create'>Crear</Link>
                </nav>
            </div>
            <div className={styled.contsearch}>
                <SearchBar onSearch={onSearch}></SearchBar>
            </div>
        </div>
    );
}
export default NavBar;