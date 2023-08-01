import { useParams } from 'react-router-dom';
import styled from './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIdVideogame } from '../../redux/action'

const Detail = () => {

    const { id } = useParams(); //recibimos el id
    console.log(useParams());

    const dispatch = useDispatch();

    const { videogamesState } = useSelector(state => state)

    useEffect(() => {
        dispatch(getIdVideogame(id));
    }, [dispatch, id])

    console.log("detail ==> ", videogamesState);
    return (
        <div className={styled.containner}>
            <div className={styled.detail}>
                <div className={styled.image}>
                    <img src={videogamesState.image} alt={videogamesState.name}></img>
                </div>
                {/* // (id,name,description,platforms,image,released,rating,genres) */}

                <div className={styled.texts}>
                    <h1>{videogamesState.name}</h1>
                    <h2 className={styled.id}>Id: {id}</h2>
                    <h2>platforms:</h2>
                    <p>{videogamesState.platforms}</p>
                    <h2>description:</h2>
                    <p> {videogamesState.description}</p>
                    <h2>released:</h2>
                    <p>{videogamesState.released}</p>
                    <h2>Genres:</h2>
                    <p>{videogamesState.genres}</p>
                    <h2>Rating:</h2>
                    <p> {videogamesState.rating}</p>
                </div>
            </div>
        </div>
    );
}
export default Detail;

/*
📍 DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un videojuego:

ID.
Nombre.
Imagen.
Plataformas.
Descripción.
Fecha de lanzamiento.
Rating.
Géneros.
*/