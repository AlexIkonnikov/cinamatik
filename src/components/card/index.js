import React from 'react';

export default function Card(props) {

    const film = props.film;

    const poster = film.Poster === "N/A" ? 'https://teploelement.ru/images/not_found.jpg' : film.Poster;

    return (
        <div className="card ms-3 mb-3" style={{width: "17%"}}>
            <img src={poster} className="card-img-top" alt={film.Title} />
            <div className="card-body">
                <h5 className="card-title">{film.Title}</h5>
            </div>
        </div>
    );
}