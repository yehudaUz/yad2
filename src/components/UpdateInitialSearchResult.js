import { connect } from 'react-redux';
import { updateCarSearchParams } from '../actions/actions'

const PORT = process.env.PORT || 5000;

const UpdateInitialSearchResult = async (props) => {
    fetch("https://glacial-escarpment-22041.herokuapp.com:" + PORT + "/carSearchInitial", {
        method: 'POST',
    }).then(response => response.json()).then(data => {
        props.dispatch(updateCarSearchParams())
        return (data.body)
    }
    ).catch(error => console.log("ERROR: " + error)) // Handle the error response object)
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(UpdateInitialSearchResult);
