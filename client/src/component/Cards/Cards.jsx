import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {

    const { videogamesOriginState } = useSelector((state) => state);
    console.log("en cards useSelector ===>  ", videogamesOriginState);

    // let desde = (nu0mPageState - 1) * 15;
    // let hasta = numPageState * 15;
    // let cantPages = Math.floor(videogameState.length / 15)

    // //slice realiza el corte 
    // const viewvideogames = videogameState.slice(desde, hasta)

    return (
        // <div className={style.container}>
            <div className={style.cards}>

                {
                    videogamesOriginState.map((game, index) => {
                        const res = game;
                        return <Card
                            key={index}
                            id={res.id}
                            name={res.name}
                            image={res.image}
                            genres={res.genres}
                            rating={res.rating}
                        />;
                    })
                }

            </div>

        // </div >
    )
};

export default Cards;