import React from "react";
import styled from "./Form.module.css"
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const navigate = useNavigate();


    const handleSubmit =(event)=>{
        event.preventDefault();



        navigate("/home");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styled.containner }>
                <div className={styled.name}>
                    <label className={styled.required}>Name:</label>
                    <input type="text"
                        id="name"
                        name="name"
                    />
                </div>
                <div className={styled.image}>
                    <label className={styled.required}>Image:</label>
                    <input type="text"
                        id="image"
                        name="image"
                    />
                </div>
                <div className={styled.description}>
                    <label className={styled.required}>Description:</label>
                    <textarea type="text"
                        id="description"
                        name="description"
                    />
                </div>
                <div className={styled.platforms}>
                    <label className={styled.required}>PLatforms:</label>
                    <select
                        id="platforms"
                        name="platforms"
                    >
                        <option value="ps4">PlayStation 4</option>
                        <option value="xboxone">Xbox One</option>
                        <option value="switch">Nintendo Switch</option>
                        <option value="pc">PC</option>
                    </select>
                </div>
                <div className={styled.released}>
                    <label>Released Date:</label>
                    <input type="date"
                        id="released"
                        name="released"
                    />
                </div>
                <div className={styled.rating}>
                    <label>Rating:</label>
                    <input type="text"
                        id="rating"
                        name="rating"
                    />
                </div>
                <button type="submit">SEND</button>
            </div>

        </form>
    );
}
export default Form;
/* 
Nombre.
Imagen.
Descripción.
Plataformas.
Fecha de lanzamiento.
Rating.
Posibilidad de seleccionar/agregar varios géneros en simultáneo.
Botón para crear el nuevo videojuego.
*/
