import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return <div className="container">
        <h2>Useful links</h2>
        <ul className="home">
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
        </ul>
    </div>
}
export default Home;