import React from "react"
import styled from "./SideBar.module.css"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterByName, filterByRating, filterReset, filterByGenre, filterByOrigin } from "../../redux/action";


export const SideBar = () => {

    const dispatch = useDispatch()
    const [select, setSelects] = useState({});
    const { genresState } = useSelector(gen => gen)
    const genredb = genresState.data;

    const handleResetFilters = (event) => {
        const filtroDefault = {
            orderBy: 'default',
            rating: 'default',
            genre: 'default',
            origin: 'default'
        }
        setSelects(filtroDefault);
        dispatch(filterReset())
    }

    const handleChange = (event) => {
        setSelects(() => ({
            ...select,
            [event.target.name]: event.target.value
        }));

        if (event.target.name === 'name') {
            dispatch(filterByName(event.target.value))
        }
        if (event.target.name === 'rating') {
            dispatch(filterByRating(event.target.value))
        }
        if (event.target.name === 'genre') {
            dispatch(filterByGenre(event.target.value))
        }
        if (event.target.name === 'origin') {
            dispatch(filterByOrigin(event.target.value))
        }
    }


    return (
        <div className={styled.sidebar}>
            <select
                name='name'
                value={select.name}
                onChange={handleChange}
                defaultValue='default'
            >
                <option disabled value="default">Filter Name   </option>
                <option value="ascending">   Name A/Z   </option>
                <option value="descending"> Name Z/A </option>
            </select>


            <select
                name='rating'
                value={select.rating}
                onChange={handleChange}
                defaultValue='default'
            >
                <option disabled value="default">Filter Rating</option>

                <option value="ascending">Rating Ascending ↑ </option>
                <option value="descending">Rating Descending ↓ </option>
            </select>


            <select
                name='genre'
                value={select.genre}
                onChange={handleChange}
                defaultValue='default'
            >
                <option disabled value="default">Filter Genre</option>
                {genredb && genredb.map((gen, i) => {
                    return (
                        <option key={i} value={gen.name}>{gen.name}</option>
                    )
                })}
            </select>

            <select
                name='origin'
                value={select.origin} 
                onChange={handleChange}
                defaultValue='default'
            >
                <option disabled value="default">Filter Origin</option>
                <option value="api">Api</option>
                <option value="db">Bd</option>
            </select>

            <button onClick={handleResetFilters}>Reset</button>

        </div>
    )

}