import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/action';
import RiderLinks from './RiderLinks.jsx';
import Loading from './Loading.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.dispatch(getData())
    }
    render() {
        console.log(this.props)
        let data = this.props.IndegoData.data.length > 0 ?
            <RiderLinks data={this.props.IndegoData.data} /> : <Loading />
        return (
            <div>
                {data}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        IndegoData: { ...state.IndegoData }
    }
}

export default connect(mapStateToProps)(App)
