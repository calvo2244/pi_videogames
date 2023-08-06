import { useParams } from 'react-router-dom';
import styled from './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIdVideogame } from '../../redux/action'

const Detail = () => {

    const { id } = useParams(); //recibimos el params id
    const dispatch = useDispatch();
    const { videogamesDetailState } = useSelector(state => state)

    useEffect(() => {
        dispatch(getIdVideogame(id));
    }, [dispatch, id])
    return (
        <div className={styled.containner}>
            <div className={styled.detail}>
                <div className={styled.image}>
                    <img src={videogamesDetailState.image} alt={videogamesDetailState.name}></img>
                </div>

                <div className={styled.texts}>
                    <h1>{videogamesDetailState.name}</h1>
                    <h2 className={styled.id}>Id: {id}</h2>
                    <h2>platforms:</h2>
                    <p>{videogamesDetailState.platforms}</p>
                    <h2>description:</h2>
                    <p> {videogamesDetailState.description}</p>
                    <h2>released:</h2>
                    <p>{videogamesDetailState.released}</p>
                    <h2>Genres:</h2>
                    <p>{videogamesDetailState.genres}</p>
                    <h2>Rating:</h2>
                    <p> {videogamesDetailState.rating}</p>
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