import React from 'react'
import { connect } from 'react-redux';

const Cars = (props) => {
    console.log("fasdfasdf", props)
    return (
        <div>
            <img src={props.adsPath} alt="symbol" className="yad2Ads"></img>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Cars);
