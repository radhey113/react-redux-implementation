
import React from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../Actions/GetAction'; 
import './style.css';

class MapDashboard extends React.Component {

    constructor(props){

        /** Pass props to base class **/ 
        super(props);

        /** Current state **/ 
        this.state = {
           activeAddress: '',
           allAddress: [],
           searchValue: ''
        }
    }

    /** Submit location to state **/ 
    render(){
    
        return (
            <div className="mapStyle">
                <div className="mapStyle">
                    This is an example of React-Redux
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        activeAddress: state.activeAddress
    })
}


// export default MapDashboard
export default connect(mapStateToProps, { getLocation })(MapDashboard);


