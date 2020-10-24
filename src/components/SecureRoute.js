import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { Context } from "../store/context";

const SecureRoute = ({ component: Component, ...rest }) => {
    const { state } = useContext(Context);

    return (
        <Route
            {...rest}
            render={props => {
                if (state.user)
                    return <Component {...props} />
                return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            }} />
    );
}

export default SecureRoute;