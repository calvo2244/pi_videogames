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
        <div className={style.container}>
            <div className={style.cards}>

                {
                    videogamesOriginState?.map((videogamesState, index) => {
                        
                        return <Card
                            key={videogamesState.id}
                            id={videogamesState.id}
                            name={videogamesState.name}
                            image={videogamesState.background_image}
                            genres={videogamesState.genres?.map((genre) =>{return (genre.name)})}
                            rating={videogamesState.rating}
                        />;
                    })
                }

            </div>

        </div >
    )
};

export default Cards;