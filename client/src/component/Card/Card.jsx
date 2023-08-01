import styled from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
            <div className={styled.container}>
                <div className={styled.front}>
                    <img src={props.image}
                        alt={props.name}
                        className={styled.image} />
                    <h3>{props.name}</h3>
                </div>

                <div className={styled.back}>
                    <h3> {props.name}</h3>
                    <p>id: {props.id}</p>
                    {/* <h3>Genres:</h3> <p>{props.genres} </p> */}
                    <h3>rating:</h3> <p>{props.rating}</p>
                    <div className={styled.link}>
                        <Link to={`/detail/${props.id}`}>Detail</Link>
                    </div>
                </div>

            </div>

    )
};

export default Card;