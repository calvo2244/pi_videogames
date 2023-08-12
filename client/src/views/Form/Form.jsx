import styled from "./Form.module.css"
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { valiDateGame } from "../../utils/validation.js";
import { createVideoGame, getAllGenresBd } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import Select from "react-select"



const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { genresState } = useSelector(gen => gen)

    const [inputData, setInputData] = useState({
        name: "",
        description: "",
        image: "",
        platforms: [],
        released: "",
        rating: "",
        genres: []
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        image: "",
        platforms: [],
        released: "",
        rating: "",
        genres: []
    });

    const platformsSelect = [
        { label: "PlayStation 5", value: "playStation5", name: "platforms" },
        { label: "Xbox One", value: "xboxOne", name: "platforms" },
        { label: "PlayStation 4", value: "playStation4", name: "platforms" },
        { label: "Xbox Series S/X", value: "xboxSeries", name: "platforms" },
        { label: "PC", value: "pc", name: "platforms" },
        { label: "Nintendo Switch", value: "nintendoSwitch", name: "platforms" },
        { label: "iOS", value: "ios", name: "platforms" },
        { label: "Android", value: "android", name: "platforms" },
    ]

    useEffect(() => {
        dispatch(getAllGenresBd())
    }, [dispatch])

    const optionGenre = genresState.data.map((genre) => ({
        value: genre.name,
        label: genre.name,
        name: "genre"
    }))
    // console.log("genresState   ", optionGenre);


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

        if (errors.platforms) return alert(errors.platforms)
        if (errors.name || errors.name === "") return alert(errors.name)
        if (errors.released) return alert(errors.released)
        if (errors.rating) return alert(errors.rating)
        if (errors.image) return alert(errors.image)
        if (errors.description) return alert(errors.description)
        if (errors.genres) return alert(errors.genres)
        else {
            dispatch(createVideoGame(inputData))
            alert("VideoGame created succes")
        }
        setInputData({
            name: "",
            description: "",
            platforms: [],
            image: "",
            released: "",
            rating: "",
            genre: []
        })
        navigate('/home');
    }

    const handleChangePLatforms = (event) => {
        const pltformselem = event.map(ele => ele.value)
        setInputData({
            ...inputData,
            platforms: pltformselem,
        });
        setErrors(valiDateGame({
            ...inputData,
            platforms: pltformselem,
        }))
        console.log("lo del Select ==>> ", pltformselem);
    }
    const handleChangeGenre = (event) => {
        const genreelem = event.map(ele => ele.value)
        setInputData({
            ...inputData,
            genres: genreelem,
        });
        setErrors(valiDateGame({
            ...inputData,
            genres: genreelem,
        }))
        // console.log("lo del Select ==>> ", genreelem);
    }


    // console.log("estado inputdata ==>> ", inputData)
    // console.log("estado errors ==>> ", errors)

    return (
        <div>
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
                        <input type="number"
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
                        <Select
                            name="platforms"
                            // defaultValue={{ label: "Select Plataform", value: "default" }}
                            options={platformsSelect}
                            onChange={handleChangePLatforms}
                            isMulti
                        />
                        <span>{errors?.platforms && errors.platforms}</span>
                    </div>

                    <div className={styled.platforms}>
                        <label className={styled.required}>Genres:</label>
                        <Select
                            // style={styled.selectReact}
                            className={styled.selectReact}
                            name="genre"
                            // defaultValue={{ label: "Select Plataform", value: "default" }}
                            options={optionGenre}
                            onChange={handleChangeGenre}
                            isMulti
                        />
                        <span>{errors?.genres && errors.genres}</span>
                    </div>
                    <button type="submit">SEND</button>
                </div>

            </form>
        </div>
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
