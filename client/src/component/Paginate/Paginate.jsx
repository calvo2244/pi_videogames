import React from "react";
import { useDispatch } from "react-redux";
import { prev, next } from "../../redux/action";
import styled from "./Paginate.module.css";

export default function Paginate({ numPage, cantPage }) {

    const dispatch = useDispatch();
    console.log(numPage);
    return (
        <div className={styled.container}>
            <div className={styled.paginate}>
                {
                    numPage <= 1 ? (
                        <div className={styled.prev}>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        <div className={styled.prev}>
                            <button onClick={() => dispatch(prev())}>PREV</button>
                        </div>
                    )
                }
                <div className={styled.page}>
                    <h3>{numPage - 1}</h3>
                    <h3>{numPage}</h3>
                    <h3>{numPage + 1}</h3>
                </div>

                {
                    numPage >= cantPage ? (
                        <div className={styled.next}>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        <div className={styled.next}>
                            <button onClick={() => dispatch(next())}>NEXT</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
