/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React, { PureComponent } from "react";
import map from "lodash/map";
import MovieCard from "../component/movie-card";
import axios from "axios";


class MoviePage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            moviedata: []
        };
    }

    componentDidMount() {
        // api call
        /* const movies = [{
            id: '1',
            moviename: 'Iron Man 1',
            rating: 5,
            realeasedate: '15-05-2008',
            image: imageurl
        },
        {
            id: '2',
            moviename: 'Iron Man 2',
            rating: 5,
            realeasedate: '15-05-2010',
            image: imageurl
        },
        {
            id: '3',
            moviename: 'Iron Man 3',
            rating: 5,
            realeasedate: '15-05-2012',
            image: imageurl
        }]
         */
        axios.get('/movies').then((response) =>{
            if (response && response.data) {
                this.setState((current) => ({current, moviedata: response.data}))
            }
        })
    }

    render() {
        const  { moviedata } = this.state;

        return (
            <>
                <main>

                <section className="py-5 text-center container">
                    <div className="row ">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Movie Album</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                        {/* <a href="#" className="btn btn-primary my-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
                        </p>
                    </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        {moviedata.length === 0 && (
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                Loding...
                            </div>
                        )}
                        {moviedata.length > 0 && (
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {map(moviedata, (movie) => {
                                return (
                                    <div className="col">
                                        <MovieCard
                                            id={movie.id}
                                            image={movie.image}
                                            rating={movie.rating}
                                            key={movie.id}
                                            moviename={movie.moviename}
                                            realeasedate={movie.realeasedate}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        )}

                    </div>
                </div>
                </main>
            </>
        );
    }
}

MoviePage.propTypes = {

};

export default MoviePage;