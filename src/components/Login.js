import React, { useState, useContext } from "react";
import { Context } from "../store/context";
import { signInWithEmailAndPassword } from '../api/UserApi';

const Login = (props) => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loginError, setLoginError] = useState('');
    const clearError = () => {
        setEmailError('');
        setLoginError('');
    }

    const handleLogin = async () => {
        clearError();
        if (!validateEmail(email))
            return setEmailError('invalid email');
        const authDetails = await signInWithEmailAndPassword(email, password);
        if (authDetails && authDetails.IsSuccess) {
            clearInputs();
            actions({ type: 'setUser', payload: { user: authDetails.user } });
            props.history.push('/home');
        } else {
            setLoginError('invalid login details')
        }
    }

    const validateEmail = () => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <section className="login">

            <div className="login-container">
                <h1>Login</h1>
                <label>Username</label>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="someone@somewhere.com"
                    autoFocus required />
                <p className="error-message">{emailError}</p>
                <label>Password</label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="what's your secret?"
                    required />
                <p className="error-message">{loginError}</p>
                <div className="button-container">
                    <button onClick={handleLogin}>Sign in</button>
                </div>
            </div>
        </section>
    )
}
export default Login;