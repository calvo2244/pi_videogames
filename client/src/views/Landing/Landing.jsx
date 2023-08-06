import { useDispatch } from 'react-redux';
import IconoInicio from '../../image/image';
import styled from './Landing.module.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { createGenresBd } from '../../redux/action';
const Landing = () => {

    const dispatch = useDispatch();


    

        useEffect(() => {
            dispatch(createGenresBd())
        }, [dispatch])


    return (
        <form>
            <div className={styled.container}>
                <div className={styled.title}>
                    <h1> Video Games</h1>
                </div>
                <img className={styled.image} src={IconoInicio.playcontroller3} alt=""></img>
                <div >
                    <Link to={"/home"}>
                        <button className={styled.button} >Ingresar</button>
                    </Link>
                </div>
            </div>
        </form>
    );
}
export default Landing;
