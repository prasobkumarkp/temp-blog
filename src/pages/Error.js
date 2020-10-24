import { NavLink } from "react-router-dom"

const Error = () => {
    return <div className="error-404">
        <h1>404 Error page</h1>
        <p>Sorry this page doesn't exists</p>
        <NavLink to="/">Go Back</NavLink>
    </div>
}
export default Error;