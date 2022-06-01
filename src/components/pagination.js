import React from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash'

const Pagination = (props) => {
    const { itemsCount, currentPage, pageSize, onPageChange } = props;

    const pageCount = Math.ceil(itemsCount/pageSize);
    if(pageCount === 1) return null
    const pages = _.range(1, pageCount+1)
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    pages.map(eachPage => (
                        <li className={currentPage === eachPage ? "page-item active" : "page-item"} key={eachPage}>
                            <a className="page-link" onClick={()=> onPageChange(eachPage)}>{eachPage}</a>
                        </li>
                    ))
                }
               
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
}

export default Pagination