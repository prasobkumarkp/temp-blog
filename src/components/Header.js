import React, { useContext } from "react";
import { Context } from "../store/context";
import { useHistory, Redirect } from 'react-router-dom'

const Header = (props) => {
    const { actions } = useContext(Context);
    const history = useHistory();

    const handleLogout = () => {
        actions({ type: 'setUser', payload: { user: null } });
        return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    }

    const handleBack = () => {
        history.goBack();
    }

    return (
        <section className="header">
            <nav>
                <button onClick={handleBack}>Back</button>

                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Header;