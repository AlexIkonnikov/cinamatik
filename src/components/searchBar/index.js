import React, {useState} from 'react';
import axios from 'axios';


export default function Search(props) {

    const [query, setQuery] = useState('Potter');

    function onChangeText(evt) {
        setQuery(evt.target.value);
    }

    function getFilms(query) {
        let url = `http://www.omdbapi.com/?s=${query}&apikey=34c8f0c8`;
        
        axios.post(url)
            .then(function (response) {
                if (response.data.Response === 'True') {
                    console.log(response.data.Search);
                    props.changeFilms(response.data.Search);
                } else {
                    props.changeFilms([]);
                }
            });
    }

    function submitForm(evt) {
        evt.preventDefault();
        getFilms(query);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-3">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="navbar-brand" href="/">BestCinema</a>
                    </div>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder={query} aria-label="Search" onChange={onChangeText} />
                    <button className="btn btn-outline-success" type="submit" onClick={submitForm}>Search</button>
                </form>
            </div>
        </nav>
    );
}