import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
    state = {
        movies: getMovies()
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(obj => obj._id !== movie._id)
        this.setState({ movies })
    }
    render() {
        if(this.state.movies.length === 0 ) 
            return <p>No Movies Found</p>
        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map(eachMovie => (
                                <tr key={eachMovie._id}>
                                    <td>{eachMovie.title}</td>
                                    <td>{eachMovie.genre.name}</td>
                                    <td>{eachMovie.numberInStock}</td>
                                    <td>{eachMovie.dailyRentalRate}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={ () => this.handleDelete(eachMovie) }>Delete</button></td>
                                </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Movies