import React from 'react';

class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>User Info</h3>
                <ul>
                    <li>Name - {this.props.name}</li>
                    <li>Age - {this.props.age}</li>
                    <li>Gender - {this.props.gender}</li>
                </ul>
            </div>
        )
    }
}

export default FirstComponent;
