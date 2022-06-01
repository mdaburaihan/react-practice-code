import React, { Component } from 'react';

class TableBody extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.movies.map(eachMovie => (
                        <tr key={eachMovie._id}>
                            <td>{eachMovie.title}</td>
                            <td>{eachMovie.genre.name}</td>
                            <td>{eachMovie.numberInStock}</td>
                            <td>{eachMovie.dailyRentalRate}</td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(eachMovie)}>Delete</button></td>
                        </tr>
                    ))
                }

            </tbody>
        )
    }
}

export default TableBody;