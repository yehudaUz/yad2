import React from 'react'
import { connect } from 'react-redux';

const Ads = (props) => {
    return (
        <div className="ads">
            <img src={props.adsPath} alt="yad2Ads" className="yad2Ads"></img>
        </div>
    )
}

const mapStateToProps = (state) => { return state };

export default connect(mapStateToProps)(Ads);
