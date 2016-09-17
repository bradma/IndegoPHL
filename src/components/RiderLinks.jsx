import React from 'react';

class RiderLinks extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map((designations, index) => {
                        return (
                            <li key={"a"+index}>
                                <a key={index}
                                    href={"https://www.google.com/maps/place/"+designations.end_lat+","+designations.end_lon}
                                >{designations.end_lat}, {designations.end_lon} </a>
                            </li>
                        )
                   })}
                </ul>
            </div>
        )
    }
}

export default RiderLinks
