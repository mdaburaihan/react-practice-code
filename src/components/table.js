import React from 'react';
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = (props) => {
    const {columns, movies, onDelete, sortColumn, onSort} = props;
    return (
        <table className="table">
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody movies={movies} onDelete={onDelete} columns={columns}/>
        </table>
    )
}

export default Table;