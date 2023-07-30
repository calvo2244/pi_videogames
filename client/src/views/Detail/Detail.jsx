import { useParams } from 'react-router-dom/cjs/react-router-dom';
import styled from './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIdVideogame } from '../../redux/action'

const Detail = () => {

    const { id } = useParams(); //recibimos el id

    const dispatch = useDispatch();

    const { videogamesState } = useSelector(state => state)

    useEffect(() => {
        dispatch(getIdVideogame(id));
    }, [dispatch, id])
    console.log("detail ==> ", videogamesState);
    return (
        <div className={styled.containner}>
            <h1>Estamos en detail</h1>
            <div className={styled.detail}>
                <div className={styled.image}>
                    <img src={videogamesState.imagen} alt={videogamesState.nombre}></img>
                </div>

                <div className={styled.texts}>
                    <h1>{videogamesState.nombre}</h1>
                    <h2 className={styled.id}>Id: {id}</h2>
                    <h2>Plataformas:</h2>
                    <p>{videogamesState.plataforma?.map((plataform)=>plataform.name)}</p>
                    <h2>Descripción:</h2>
                    <p> {videogamesState.descripcion}</p>
                    <h2>Fecha de lanzamiento:</h2>
                    <p>{videogamesState.fecha_de_lanzamiento}</p>
                    <h2>Géneros:</h2>
                    <p>{videogamesState.generos?.map((g) =>g.name)}</p>
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