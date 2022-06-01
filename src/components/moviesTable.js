import React, { Component } from 'react';
import TableHeader from './tableHeader'
import TableBody from './tableBody'

class MoviesTable extends Component {

    columns = [
        { path: "title", lable: "Title" },
        { path: "genre.name", lable: "Genre" },
        { path: "numberInStock", lable: "Stock" },
        { path: "dailyRentalRate", lable: "Rate" },
        { key: "delete" },
    ]
    render() {
        const {movies, onDelete, sortColumn, onSort} = this.props;
        return (
            <React.Fragment>
                <p>Showing {movies.length} movies</p>
                <table className="table">
                    <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
                    <TableBody movies={movies} onDelete={onDelete}/>
                </table>
            </React.Fragment>
        )
    }
    
}

export default MoviesTable;