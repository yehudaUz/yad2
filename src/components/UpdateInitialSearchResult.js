import React from 'react'
import { connect } from 'react-redux';
import { updateCarSearchParmas } from '../actions/actions'


const UpdateInitialSearchResult = async (props) => {
    fetch('http://localhost:3000/carSearchInitial', {
        method: 'POST',
    }).then(response => response.json()).then(data => {
        console.log(data)
        props.dispatch(updateCarSearchParmas())
        return (data.body)
    }
        // response.json().then((result) => this.setState({ results: results }))
    ).catch(error => console.log("ERROR: " + error)) // Handle the error response object)
}

const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(UpdateInitialSearchResult);
// export default UpdateInitialSearchResult;