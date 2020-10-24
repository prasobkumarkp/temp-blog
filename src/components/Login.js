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
        const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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