import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Table from './table'

class MoviesTable extends Component {

    columns = [
        { path: "title", lable: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
        { path: "genre.name", lable: "Genre" },
        { path: "numberInStock", lable: "Stock" },
        { path: "dailyRentalRate", lable: "Rate" },
        { key: "delete", content: movie => (<button className="btn btn-danger btn-sm" onClick={() => this.onDelete(movie)}>Delete</button>) },
    ]
    render() {
        const {movies, onDelete, sortColumn, onSort} = this.props;
        return (
            <React.Fragment>
                <p>Showing {movies.length} movies</p>
                <Table columns={this.columns} movies={movies} onDelete={onDelete} sortColumn={sortColumn} onSort={onSort}/>
            </React.Fragment>
        )
    }
    
}

export default MoviesTable;