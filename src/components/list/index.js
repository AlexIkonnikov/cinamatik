import React from 'react';
import Card from '../card';

export default function List(props) {

    let films = props.films;

    function renderFilms() {
        return films.map((film) => {
            return <Card key={film.imdbID} film={film}/>
        });
    }

    const result = films.length > 0 ? <div className="d-flex justify-content-start flex-wrap">{renderFilms()}</div> : <h1>Фильмов не найдено</h1>;


    return result;
}