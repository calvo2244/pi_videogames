import Cards from "../../component/Cards/Cards";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllVideogames } from "../../redux/action";
import styled from './Home.module.css'

const Home = ()=>{

    //cuando se monta, que haga el dispatch
    // useEffect()  useDispatch()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllVideogames())
    },[dispatch])

    return(
        <div className={styled.containner}>
        <Cards />
        </div>
    );
}
export default Home;
