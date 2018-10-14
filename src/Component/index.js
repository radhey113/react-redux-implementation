
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from '../Actions/GetAction';
import './style.css';

class MapDashboard extends React.Component {

    constructor(props){

        /** Pass props to base class **/ 
        super(props);

        /** Current state **/ 
        this.state = {
            demoName: ''
        };
        this.getCurrentStateValue.bind(this);
        this.getCurrentStateValue();
    }


    getCurrentStateValue(){
        let check =  () => this.props.getData();
        console.log(`Check : ${check}`);
    }

    /** Submit location to state **/ 
    render(){
    
        return (
            <div className="mapStyle">
                <div className="mapStyle">
                    This is an example of {this.state.demoName}.
                </div>
            </div>
        )
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ getData: getData }, dispatch);
};


// export default MapDashboard
export default connect( matchDispatchToProps )(MapDashboard);


