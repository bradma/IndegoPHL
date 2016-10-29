import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div><i className="fa fa-circle-o-notch fa-spin" aria-hidden="true">Loading Data ...</i></div>
        )
    }
}

export default Loading
