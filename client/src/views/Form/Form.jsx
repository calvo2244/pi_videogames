import styled from "./Form.module.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { valiDateGame } from "../../utils/validation.js";
import { createVideoGame } from "../../redux/action";



const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dataForm, setDataFom] = useState({
        name: "",
        description: "",
        platforms: "",
        image: "",
        released: "",
        rating: ""
    });


    //asignar datos a el estado por cada input
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value
        setDataFom({ 
            ...dataForm, 
            [name]: value 
        });
    }

    //accion del formulario por el button 
    const handlerSubmit = (event) => {
        event.preventDefault();

        if (valiDateGame(dataForm)) {
            alert('You must fill the inputs correctly')
        }
        else {
            dispatch(createVideoGame(dataForm))
        }
        setDataFom({
            name: "",
            description: "",
            platforms: "",
            image: "",
            released: "",
            rating: ""
        })

        console.log(event);
        navigate("/home");
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <div className={styled.containner}>
                    <div className={styled.name}>
                        <label className={styled.required}>Name:</label>
                        <input type="text"
                            id="name"
                            name="name"
                            value={dataForm.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styled.released}>
                        <label className={styled.required}>Released Date:</label>
                        <input type="date"
                            id="released"
                            name="released"                            
                            value={dataForm.released}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styled.rating}>
                        <label className={styled.required}>Rating:</label>
                        <input type="text"
                            id="rating"
                            name="rating"                            
                            value={dataForm.rating}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styled.description}>
                        <label className={styled.required}>Description:</label>
                        <textarea type="text"
                            id="description"
                            name="description"                                                        
                            value={dataForm.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styled.image}>
                        <label className={styled.required}>Image:</label>
                        <input type="text"
                            id="image"
                            name="image"
                            value={dataForm.image}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styled.platforms}>
                        <label className={styled.required}>PLatforms:</label>
                        <select
                            id="platforms"
                            name="platforms"                            
                            value={dataForm.platforms}
                            onChange={handleChange}
                        >
                            <option value="ps4">PlayStation 4</option>
                            <option value="xboxone">Xbox One</option>
                            <option value="switch">Nintendo Switch</option>
                            <option value="pc">PC</option>
                        </select>
                    </div>
                    <button type="submit">SEND</button>
                </div>

            </form>
        </>
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
