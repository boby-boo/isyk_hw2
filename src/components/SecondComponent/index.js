import React from 'react';

class SecondComponent extends React.Component {
    render() {
        return (
            <h2>{this.props.children}</h2>
        )
    }
}

export default SecondComponent;
