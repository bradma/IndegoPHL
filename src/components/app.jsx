import React from 'react';
import { connect } from 'react-redux';

import RiderLinks from './RiderLinks.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //console.log('Goodness Awaits')
        //console.log(data)
        console.log('pass')
    }
    render() {
        return (
            <div> TESTING
                <RiderLinks />
            </div>
        )
    }
}

export default connect()(App)
