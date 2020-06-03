import React from 'react'
import { connect } from 'react-redux';

const SiteMapLink = (props) => {
    console.log("ZZZZZZZZZZZ", props)
    const renderMapTexts = () => {
        props.menuText.forEach(text => {
            return (
                <li key={text}>  {text}</li>
            )
        });
    }

    return (
        <div className="sitemap-link">
            <ul>
                {renderMapTexts()}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SiteMapLink);


// .wrapper ul.breadcrumbs li[data-v-14009976]:before {
//     content: ">";
//     color: grey;
//     display: inline-block;
//     font-size: 10px;