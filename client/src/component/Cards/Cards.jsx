import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

import Paginate from "../Paginate/Paginate";

const Cards = () => {

    const { videogamesHomeState, numPageState } = useSelector((state) => state);

    const cantCharPerPage = 15
    let desde = (numPageState - 1) * cantCharPerPage; //0 
    let hasta = numPageState * cantCharPerPage;       //15

    let cantPages = Math.ceil(videogamesHomeState.length / cantCharPerPage)
// console.log("cantidad VideoGames", videogamesHomeState.length);
// console.log("cantidad paginas", cantPages);
    //slice realiza el corte 
    const viewVideoGames = videogamesHomeState.slice(desde, hasta)

    return (
        <div className={style.container}>
            <div className={style.paginate}>
                <Paginate numPage={numPageState} cantPage={cantPages} />
            </div>
            <div className={style.cards}>
                {
                    viewVideoGames.map((game, index) => {
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

        </div >
    )
};

export default Cards;