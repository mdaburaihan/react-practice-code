import React, { Component } from 'react';
import _ from 'lodash'

class TableBody extends Component {
    renderCell = (item, column) => {
        if(column.content) {
            return column.content(item)
        }else{
            return _.get(item, column.path)
        }
    }
    render() {
        const { movies, columns } = this.props;
        return (
            <tbody>
                {
                    movies.map(eachMovie => (
                        <tr key={eachMovie._id}>
                            {
                                columns.map(eachColumn => (
                                    <td key={eachMovie._id + (eachColumn.path || eachColumn.key)}>{this.renderCell(eachMovie, eachColumn)}</td>                         
                                ))
                            } 
                        </tr> 
                    ))
                }

            </tbody>
        )
    }
}

export default TableBody;