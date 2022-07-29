import React from "react";
import s from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <button key={p} className={p === currentPage ? s.selected_page : ""}
                                onClick={() => {onPageChanged(p)}}>{p}</button>
            })}
        </div>
    );
}

export default Paginator;