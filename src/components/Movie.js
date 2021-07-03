import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link to={{
                //pathname: "/movie-details",
                pathname: `/movie/${id}`,  // ` << 변수를 사용할 때 이 특수문자를 사용해야함
                state: { //클릭했을때 넘겨줄 데이터들
                    year: year,
                    title: title,
                    summary: summary,
                    poster: poster,
                    genres: genres
                }
            }}>

                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title" >{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>

    );
}

Movie.propTypes =
{
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

};

export default Movie;