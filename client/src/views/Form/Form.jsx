import styled from "./Form.module.css"
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { valiDateGame } from "../../utils/validation.js";
import { createVideoGame, getAllGenresBd } from "../../redux/action";
import { Navigate } from "react-router-dom";



const Form = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { genresState } = useSelector(gen => gen)

    const [inputData, setInputData] = useState({
        name: "",
        description: "",
        image: "",
        platforms: "",
        released: "",
        rating: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        image: "",
        platforms: "",
        released: "",
        rating: ""
    });

    useEffect(() => {
        dispatch(getAllGenresBd())
    }, [dispatch])


    //asignar datos a el estado por cada input
    const handleChange = (event) => {
        setInputData({
            ...inputData,
            [event.target.name]: event.target.value,
        });
        setErrors(valiDateGame({
            ...inputData,
            [event.target.name]: event.target.value,
        }))
    }

    //accion del formulario por el button 
    const handlerSubmit = (event) => {
        event.preventDefault();

        const errorForm = Object.keys(inputData);
        console.log(">>>>>>>>>>>", errorForm);

        if (errorForm.length === 0) {
            return alert('You must fill the inputs correctly')
        }
        else {
            dispatch(createVideoGame(inputData))
        }
        setInputData({
            name: "",
            description: "",
            platforms: "",
            image: "",
            released: "",
            rating: ""
        })

        // console.log(event);
        Navigate("/home");
    }

    const handlerGenres = (event) => {
        console.log(event.target.value);
    }
    console.log(genresState)
    return (
        <>
            <form onSubmit={handlerSubmit}>
                <div className={styled.containner}>
                    <div className={styled.name}>
                        <label className={styled.required}>Name:</label>
                        <input type="text"
                            id="name"
                            name="name"
                            value={inputData.name}
                            onChange={handleChange}
                        />
                        <span>{errors?.name && errors.name}</span>
                    </div>
                    <div className={styled.released}>
                        <label className={styled.required}>Released Date:</label>
                        <input type="date"
                            id="released"
                            name="released"
                            value={inputData.released}
                            onChange={handleChange}
                        />
                        <span>{errors?.released}</span>
                    </div>
                    <div className={styled.rating}>
                        <label className={styled.required}>Rating:</label>
                        <input type="text"
                            id="rating"
                            name="rating"
                            value={inputData.rating}
                            onChange={handleChange}
                        />
                        <span>{errors?.rating}</span>
                    </div>
                    <div className={styled.description}>
                        <label className={styled.required}>Description:</label>
                        <textarea type="text"
                            id="description"
                            name="description"
                            value={inputData.description}
                            onChange={handleChange}
                        />
                        <span>{errors?.description && errors.description}</span>
                    </div>
                    <div className={styled.image}>
                        <label className={styled.required}>Image:</label>
                        <input type="text"
                            id="image"
                            name="image"
                            value={inputData.image}
                            onChange={handleChange}
                        />
                        <span>{errors?.image && errors.image}</span>
                    </div>
                    <div className={styled.platforms}>
                        <label className={styled.required}>PLatforms:</label>
                        <select
                            id="platforms"
                            name="platforms"
                            defaultValue='ps4'
                            value={inputData.platforms}
                            onChange={handleChange}
                        >
                            <option value="ps4">PlayStation 4</option>
                            <option value="xboxone">Xbox One</option>
                            <option value="switch">Nintendo Switch</option>
                            <option value="pc">PC</option>
                        </select>
                        <span>{errors?.platforms && errors.platforms}</span>
                    </div>
                    <div className={styled.selectGenres}>
                        <label className={styled.required}>Genres:</label>
                        <select
                            name="genres"
                            onChange={(event) => handlerGenres(event)}
                            defaultValue='default'>

                            <option value="default" disabled>Select Genres</option>
                            {
                                genresState.data.map((gen, index) => {
                                    return (
                                        <option
                                            key={index}
                                            id={gen.id}
                                            value={gen.name}
                                        >
                                            {gen.name}
                                        </option>
                                    )
                                })
                            }
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
