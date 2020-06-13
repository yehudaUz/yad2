import React from 'react'
import { connect } from 'react-redux';

const PersonalArea = (props) => {
    console.log("fasdfasdf", props)
    return (
        <div className="login-wrapper">
            <div className="login-background">
                <div className="login-form-wrapper">
                    <form className="login-form" action="/">
                        <label className="login-form-header">כניסה לרשומים</label>
                        <input type="text" placeholder="אימייל" className="login-input-email"></input>
                        <input type="text" placeholder="ססמא" className="login-password"></input>
                        <button className="login-form-submit-button" type="submit">כניסה</button>
                        <div className="login-forget-password-wrapper">
                            <button className="input-forget-password-button">שכחתי ססמא</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(PersonalArea);
