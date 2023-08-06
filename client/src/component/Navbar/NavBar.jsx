import { Link } from "react-router-dom";
import styled from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {

    return (

        <div className={styled.container}>
            <div className={styled.contmenu}>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/create'>Crear</Link>
                    <Link to="/home">reset</Link >
                </nav>
            </div>
            <div className={styled.contsearch}>
                <SearchBar></SearchBar>
            </div>
        </div>
    );
}
export default NavBar;