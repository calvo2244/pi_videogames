import Cards from "../../component/Cards/Cards";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from './Home.module.css'
import { getAllVideogames, getAllGenresBd } from "../../redux/action";
import { SideBar } from "../../component/SideBar/SideBar";

const Home = () => {
    //cuando se monta, que haga el dispatch
    // useEffect()  useDispatch()
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllGenresBd())
    }, [dispatch])


    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch])
    

    console.log("Cargando Home");
    return (
        <div className={styled.containner}>
            <SideBar />
            <Cards />
        </div>
    );
}
export default Home;
