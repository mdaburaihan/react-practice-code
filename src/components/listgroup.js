import React from 'react';

const ListGroup = (props) => {
    const {items, valueProperty, textProperty, onGenereSelect, selectedGenre} = props;
    return (
        <ul className="list-group">
            {
                items.map(eachItem => <li 
                    className={eachItem === selectedGenre ? "list-group-item active" : "list-group-item"} key={eachItem[valueProperty]}
                    onClick={() => onGenereSelect(eachItem)}
                >{eachItem[textProperty]}</li>)
            }
        </ul>
    )
}

ListGroup.defaultProps = {
    valueProperty:"_id",
    textProperty:"name"
}

export default ListGroup;