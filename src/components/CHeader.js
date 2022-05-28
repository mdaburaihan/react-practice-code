import React from 'react';

class CHeader extends React.Component {
    render() {
        return <h1>Hello header from class component {this.props.name}</h1>
    }
}

export default CHeader;