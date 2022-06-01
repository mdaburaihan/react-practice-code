import React, { Component } from 'react';

class TableHeader extends Component {

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn}

        if(sortColumn.path === path) {
            sortColumn.sort = (sortColumn.sort === "asc") ? "desc" : "asc"
        }else{
            sortColumn.path = path
            sortColumn.sort = "asc"
        }
        this.props.onSort(sortColumn)
    }
    
    render() {
        return (
            <React.Fragment>
               <thead>
                   <tr>
                    {
                        this.props.columns.map(eachColumn => (
                                <th key={eachColumn.path || eachColumn.key} onClick={() => this.raiseSort(eachColumn.path)}>{eachColumn.lable}</th>
                        ))
                    }
                   </tr>
               </thead>
            </React.Fragment>
        )
    }
    
}

export default TableHeader;