import React from 'react'
import { connect } from 'react-redux';

const Login = (props) => {
    return (
        <div className="login-wrapper">
            <div className="login-background">
                <div className="login-form-wrapper">
                    <form className="login-form" action="/login" method="post">
                        <label className="login-form-header">כניסה לרשומים</label>
                        <input type="text" name="phoneNumber" placeholder="מספר פלאפון" className="login-phone-number"></input>
                        <input type="text" name="name" placeholder="שם" className="login-name"></input>
                        <input type="text" name="email" placeholder="אימייל" className="login-input-email"></input>
                        <input type="text" name="password" placeholder="ססמא" className="login-password"></input>
                        <button className="login-form-submit-button">כניסה</button>
                        <div className="signup-wrapper">
                            <button type="button" onClick={(e) => {
                                e.preventDefault()
                                const form = document.querySelector("form")
                                form.action="/signup"
                                form.submit()
                            }} className="input-signup-button">הרשמה</button>
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

export default connect(mapStateToProps)(Login);
