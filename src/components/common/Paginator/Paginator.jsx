import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let [portionNumber, setPortionNumber] = useState(1);
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1; 
    let rightPortionNumber = portionNumber * portionSize;
    //debugger;

    return (
        <div>
            { portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
            }
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <button key={p} className={p === currentPage ? s.selected_page : ""}
                                onClick={() => {onPageChanged(p)}}>{p}</button>
            })}
            { portionNumber < portionCount &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
            }
        </div>
    );
}

export default Paginator;